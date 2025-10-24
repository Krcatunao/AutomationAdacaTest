/**
 * Global configuration file
 * Contains environment settings and WebDriver options
 */

module.exports = {
  baseUrl: "https://www.saucedemo.com/",  // Application under test
  headless: false,                         // Run Chrome in headless mode if true
  implicitWait: 5000,                      // Default implicit wait (ms)
  defaultTimeout: 10000,                   // Default explicit wait timeout (ms)
};
