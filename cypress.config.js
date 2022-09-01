const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
    },
    
    baseUrl: 'https://integration-5ojmyuq-gy5gqpnqzxpaa.eu-4.magentosite.cloud/',
  },
});

//teste 