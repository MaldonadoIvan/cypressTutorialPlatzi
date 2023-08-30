describe('Tipos de localizadores', ()=>{
    
    it('Obtenerlo por medio de un tag', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('input') //Obtengo todos los inputs de la pagina
    })

    it('Obtenerlo por medio de un atributo', ()=>{
        cy.get('[placeholder = "First Name"]') //Obtengo todos los inputs de la pagina
    })


    it('Obtenerlo por medio de un atributo y un tag', ()=>{
        cy.get('input[placeholder = "First Name"]') //Obtengo todos los inputs de la pagina
    })

    it('Obtenerlo por medio de un id', ()=>{
        cy.get('#firstName')
    })

    it('Obtenerlo por medio de un class', ()=>{
        cy.get('.mr-sm-2.form-control')
    })

    it('Usando contains', ()=>{
        cy.contains('Reading')
        cy.contains('.header-wrapper','Widgets')
    })

    it('Usando parent', ()=>{
        //Obteniendo el elemento padre
        cy.get('input[placeholder = "First Name"]').parent()
        //Obteniendo los elementos padres
        cy.get('input[placeholder = "First Name"]').parents()

        cy.get('input[placeholder = "First Name"]').parents().find('label')

        //Esta accion es igual a la anterior pero llegando desde una manera mas sencilla, ambas son validas
        cy.get('form').find('label')
    })

}) 