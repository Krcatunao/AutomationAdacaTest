# ADACA EXAM QA AUTOMATION

Development environment with necessary tools installed (Node.js, Selenium WebDriver, Playwright)

---

## Setup using MAC
 - Install Xcode
 - 

## Evaluation Criteria  

- Code quality and organisation  
- Test coverage and effectiveness  
- Use of Selenium WebDriver features  
- Implementation of Page Object Model  
- Proper use of waits and synchronisation techniques  
- Basic error handling  
- Clarity of README and documentation  

---

## Project Overview  

This shows a Simple To Do List with a function of User Login, Add Item, Delete Item

### Tools Used  
- Selenium WebDriver – Automates browsers for functional testing.
- Mocha – Test runner for executing test cases. 
- Mochawesome – Generates beautiful HTML reports. 
- Chai – Assertion library used with Mocha. 
- NYC - Provides test coverage reports.  
- ESLint – Ensures consistent code style and quality.
- Playwright – Demo suite for modern cross-browser automation.  
---

## Key Features  

- Page Object Model (POM) – clean separation between UI locators and test logic  
- Configurable waits and timeouts (`config.js`)  
- Data-driven testing (`credentials.json`)  
- Optional headless mode  
- Logging on every major step  
- Error handling and synchronization  
- Extendable for multiple browsers  
 
---

## How to run the tests using MAC

Prerequisites:
- Xcode Latest Version
- Node.js 16.x or 18.x and npm (tested with Node 16/18 and npm 8+)
- Chrome Installed
- Github Desktop (Uses for workflow)
- VSCode (IDE Used)

After installing dependencies you must install Playwright browsers (if you plan to run Playwright tests):

Go to the Terminal in VSCode

Install dependencies:

npm install --save-dev @playwright/test

npx playwright install

Run tests (visible mode):

npm test

Run tests in headless mode:

npm run test:headless

- Screenshots of failed tests are saved to `mochawesome-report/screenshots/`.

Artifacts & reports (quick access):

- Mocha / mochawesome HTML report: `mochawesome-report/mochawesome.html`
	- Open on Windows: `start mochawesome-report\\mochawesome.html`
- Playwright HTML report: generated under `playwright-report/`
	- Show Playwright report: `npx playwright show-report playwright-report`

Note about credentials and secrets:

- `test-data/credentials.json` contains demo credentials used by the public saucedemo site django-todo

set TEST_USER=standard_user
set TEST_PASS=secret_sauce


Evaluation criteria mapping (how this repo addresses each item):

- Code quality and organisation: Page Objects under `pages/`, tests under `tests/`, utils under `utils/`, config at `config.js`.
- Test coverage and effectiveness: Tests demonstrate positive and negative login flows; coverage can be extended using `npm run coverage`.
- Use of Selenium WebDriver features: Uses explicit waits (`until.elementLocated`, `until.titleContains`), Chrome options and service builder.
- Implementation of Page Object Model: `pages/login.page.js` encapsulates locators and interactions.
- Proper use of waits and synchronisation techniques: Explicit waits used and error message retrieval has retries/backoff.
- Basic error handling: try/catch blocks in setup, teardown, and helpers; screenshot capture on test failure.
- Clarity of README and documentation: This file includes run steps, troubleshooting, and notes.

---

## Test structure and design

- `pages/` contains Page Objects (`login.page.js`, `Inventory.page.js`) which encapsulate locators and actions.
- `tests/` contains Mocha test suites (`login.test.js`, `Inventory.test.js`). Each test uses the Page Objects and explicit waits.
- `utils/driver.js` centralizes WebDriver creation, options and screenshot helper.
- `test-data/credentials.json` contains credentials and a `testItem` entry used by Inventory tests (data-driven).

Data-driven testing

- Inventory tests read `testData.testItem.name` from `test-data/credentials.json` so adding more items or iterating would be straightforward.

Assumptions

- Tests run against https://www.saucedemo.com/ (default `config.js` baseUrl).
- Chrome is the target browser; chromedriver should match the installed Chrome version.
- Native OS dialogs (outside the browser DOM) are out of scope for Selenium; best-effort disabling and DOM-based dismissal is implemented.

---

## Summary of files changed/created for this assessment

- `pages/` - Playwright and Selenium Page Objects (login, Inventory)
- `tests/` - Mocha (Selenium) tests and `tests/playwright/` Playwright tests
- `utils/` - `driver.js`, `stringUtil.js`, `testReporter.js` helpers
- `mochawesome-report/` and `playwright-report/` - generated reports and screenshots/traces

---

## Framework features

- Page Object Model (POM) implemented for both Selenium and Playwright — keeps locators and interactions encapsulated.
- Centralized WebDriver creation (`utils/driver.js`) with Chrome ServiceBuilder, explicit binary use and configurable headless/visible mode.
- Playwright demo suite under `tests/playwright/` using `@playwright/test` and POM-style pages.
- Robust synchronization: explicit waits, retry/backoff for flaky UI elements (error messages), and load-state checks.
- Screenshot capture on every test (passed/failed) and attachment into mochawesome and Playwright reports.
- Lightweight test reporter (`utils/testReporter.js`) to print a concise summary after Mocha runs.
- Small shared utilities: `utils/stringUtil.js` for traceable strings and `utils/logger.js` for centralized, level-controlled logging.