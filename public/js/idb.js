// create a variable to hold the db connection
let db;
// establish a connection to the IndexedDB database called budget-tracker, version 1
const request = indexedDB.open('budget-tracker', 1);
// this event will emit if the database version changes
request.onupgradeneeded = function (event) {
  //save a reference to the database
  const db = event.target.result;
  // create an object store (table) called 'transactions'
  db.createObjectStore('finance-transactions', { autoIncrement: true });
};
// upon a successful creation
request.onsuccess = function (event) {
  // when db is sucessfully created with its object store (from the onupgradeneeded event above) or established a connection, save reference in a global variable
  db = event.target.result; // This is required for subsequent database operations.
  // check if app is online, if yes run uploadTransactions to send all local db data to api
  if (navigator.onLine) {
    uploadTransactions();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// this function will be executed if we attempt to submit a new transaction and there's no internet connection
// call this in index.js in the .catch method meaning that the fetch failed
function saveTransaction(record) {
  // open a new transacton with the database with read and write permissions
  const credit_debit = db.transaction(['finance-transactions'], 'readwrite');

  // access the object store for 'finance-transactions'
  const transactionObjectStore = credit_debit.objectStore(
    'finance-transactions'
  );

  // add record to your store with add method
  transactionObjectStore.add(record);
  return;
}

function uploadTransactions() {
  // need to run a loop to get all the transactions saved in IndexedDB and pass them to the /api/transaction endpoint
  // first, open a transaction to the db
  const credit_debit = db.transaction(['finance-transactions'], 'readwrite');
  // next, assign an object store variable
  const transactionObjectStore = credit_debit.objectStore(
    'finance-transactions'
  );
  // lastly,  get all the records from the object store and assign it to a variable
  const getAll = transactionObjectStore.getAll();

  getAll.onsuccess = function () {
    // if there is data in the object store, send it to the server
    if (getAll.result.length > 0) {
      fetch('/api/transaction', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          const credit_debit = db.transaction(
            ['finance-transactions'],
            'readwrite'
          );
          const transactionObjectStore = credit_debit.objectStore(
            'finance-transactions'
          );
          transactionObjectStore.clear();
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}
