# Budget Tracker

## Description

This project is to take an existing budget tracker web application and transform it into a Progressive Web Application (PWA) that can store revenue and expenses offline when a strong internet connection is not available and then transmit the transactions to the server when an acceptable internet connection is available again.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Navigate to the application on Heroku at the following URL: https://dudley-poutine-45869.herokuapp.com/ . Once the application is loaded, click on the install icon at the far right of the browser address bar. Now, the application will show up as a regular application on your device. Open the application to get started.

## Usage

Once the application is started, using it is very simple. Type a transaction description into the "Name of transaction" box. Then enter a transaction amount into the "Transaction amount" box. If the transaction is revenue, click the "Add Funds" button. If the transaction is an expense, click the "Subtract Funds" button. It is that simple. The transactions will be graphed and a running total displayed. If you do not have a sufficient internet connection, transactions will be saved locally. When an good internet connection is restored, the offline transactions will be uploaded to the server when the application is restarted or when the next transaction is entered. No transaction should be lost.

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Mark Elliott https://github.com/melliott7264

The basic application starter code was provided as part of this University of Richmond Coding Boot Camp Challenge #19. Mark Elliott added the offline functionality using IndexedDB, a service worker, and a manifest making this a simple PWA.

## License

Copyright (c) 2022 Mark Elliott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
