const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log('Soy el console log del task '+message)

          return null
        }
      })
    },
    
    "excludeSpecPattern":[ // excluye los test por default que carga cypress
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],

    viewportWidth: 1920, //Configuramos la resolucion de pantalla
    viewportHeight: 1080,

    "baseUrl": "https://demoqa.com",

    testIsolation: false, //Permite realizar mas de un test con la misma URL
    
    "chromeWebSecurity": false,
    
  },
});