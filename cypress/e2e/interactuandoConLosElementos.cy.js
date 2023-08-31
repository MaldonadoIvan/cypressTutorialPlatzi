describe( 'Interactuar con los elementos', () => {
    
    it('Click', ()=>{
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')
    })

    it('Double Click', ()=>{
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')
    })

    it('Right Click', ()=>{
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    })

    it('Force Click', ()=>{
        cy.visit('/dynamic-properties')
        // cy.get('#enableAfter').click({timeout: 0})
        cy.get('#enableAfter').click({timeout: 0, force: true})
    })

    it('Click por posicion', ()=>{
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5,60)
    })

    it('Input type text', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Ivan')
        cy.get('#lastName').type('Maldonado')

        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Otro nombre')
        cy.get('#firstName').clear()
    })

    it.only('Checkboxes y radio buttons', ()=>{
        cy.visit('/automation-practice-form')
        // cy.get('#gender-radio-1').click()
        // cy.get('#gender-radio-1').click({force:true})
        // cy.get('#gender-radio-1').check({force:true})
        cy.get('label[for="gender-radio-1"]').click()

        // cy.get('#hobbies-checkbox-1').click({force:true})
        // cy.get('#hobbies-checkbox-1').check({force:true})
        // cy.get('#hobbies-checkbox-1').uncheck({force:true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })

})