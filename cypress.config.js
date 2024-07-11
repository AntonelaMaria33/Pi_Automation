module.exports = {
  e2e: {
    baseUrl: 'https://pushing-it.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'C:/Users/maria/Desktop/PI_Automation/results/my-test-output-[hash].xml',
      toConsole: true
    }
  },
};
