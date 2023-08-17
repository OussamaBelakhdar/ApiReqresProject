const { defineConfig } = require("cypress");

module.exports = {
  baseUrl: "http://localhost:3000",
  integrationFolder: "cypress/integration",
  testFiles: "**/*.spec.js",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true
};
