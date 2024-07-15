const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    baseUrl: 'https://pushing-it.vercel.app',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'C:/Users/maria/Desktop/PI_Automation/results/my-test-output-[hash].xml',
      toConsole: true
    }
  },
};
