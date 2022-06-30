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
  db = event.target.result;

  // check if app is online, if yes run uploadTransactions to send all local db data to api
  if (navigator.online) {
    // comment out this function call as the function hasn't been written yet
    // uploadTransactions;
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// this function will be executed if we attempt to submit a new transaction and there's no internet connection
// call this in index.js in the .catch method meaning that the fetch failed
function saveTransaction(record) {
  // create an object store (table) called 'fiance-transactions'
  //   db.createObjectStore('finance-transactions', { autoIncrement: true });

  // open a new transacton with the database with read and write permissions
  const transaction = db.transaction(['finance-transactions'], 'readwrite');

  // access the object store for 'finance-transactions'
  const transactionObjectStore = transaction.objectStore(
    'finance-transactions'
  );

  // add record to your store with add method
  transactionObjectStore.add(record);
}
