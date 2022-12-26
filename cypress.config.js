const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gfjm7h',
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    },

    
});
