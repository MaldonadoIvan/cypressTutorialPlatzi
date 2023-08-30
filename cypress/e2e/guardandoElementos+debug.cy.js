describe('Guardando elementos', ()=>{
    
    it('Repeticion', ()=>{
        cy.visit('/automation-practice-form')
                //Obteniendo el elemento padre
                cy.get('input[placeholder = "First Name"]').parent()
                //Obteniendo los elementos padres
                cy.get('input[placeholder = "First Name"]').parents()
        
                cy.get('input[placeholder = "First Name"]').parents().find('label')
        
                //Esta accion es igual a la anterior pero llegando desde una manera mas sencilla, ambas son validas
                cy.get('form').find('label')
    })

    it('Evitar repeticion', ()=>{
        cy.visit('/automation-practice-form')
                //Obteniendo el elemento padre
                cy.get('input[placeholder = "First Name"]').parents('form').then((form)=>{
                    const inputs = form.find('input')
                    const divs = form.find('div')
                    const labels = form.find('label')

                    //2 maneras de realizar la misma accion
                    expect(inputs.length).to.eq(15)
                    cy.wrap(inputs).should('have.length', 15)//El wrap engloba todos los inputs

                    expect(divs.length).to.eq(70)
                    expect(labels.length).to.eq(16)

                   // console.log('soy la longitud', inputs.length) // Se visualiza desde la consola
                   cy.log('soy la longitud', inputs.length) //Se visualiza desde el test sin necesidad de utilizar la consola
                    // debugger //para poder utilizarlo se debe dejar abierto la consola al realizarse el test
                    // cy.task('log', inputs.length) //en cypress.config.js creo esta task
                })
                //Obteniendo los elementos padres
                cy.get('input[placeholder = "First Name"]').parents()
        
                cy.get('input[placeholder = "First Name"]').parents().find('label')
        
                //Esta accion es igual a la anterior pero llegando desde una manera mas sencilla, ambas son validas
                cy.get('form').find('label')

                // cy.pause() // Nos sirve para pausar la ejecucion

                //cy.get('input[placeholder = "First Name"]').then(console.log)//Nos imprime por consola los atributos del elemento
                cy.get('input[placeholder = "First Name"]').debug()
            })


}) 