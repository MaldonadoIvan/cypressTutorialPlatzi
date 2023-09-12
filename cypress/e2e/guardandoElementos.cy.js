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

                })
                //Obteniendo los elementos padres
                cy.get('input[placeholder = "First Name"]').parents()
        
                cy.get('input[placeholder = "First Name"]').parents().find('label')
        
                //Esta accion es igual a la anterior pero llegando desde una manera mas sencilla, ambas son validas
                cy.get('form').find('label')
            })
}) 