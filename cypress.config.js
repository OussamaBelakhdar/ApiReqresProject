const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://localhost:3000",
        integrationFolder: "cypress/e2e",
        testFiles: "**/*.cy.js",
        viewportWidth: 1280,
        viewportHeight: 720,
        video: true
  },
  },
});
