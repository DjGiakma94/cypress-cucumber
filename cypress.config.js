const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    BASE_PATH : 'https://www.google.it',
    ALTERNATIVE_PATH: 'https://www.automationteststore.com/',
    LOGIN_URL: 'https://www.flipkart.com/',
    timeShort: 250,
    timeMedium: 500,
    timeHard: 1000,
  },
  e2e: {
    //specPattern: "**/*.feature",
    specPattern: "**/testbook/test_002.feature",
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    }
  }
})

