describe('Aserciones', () =>{
//Hay 3 tipos de aserciones, todas son validas y se utilizan dependiendo de los requerimientos de las pruebas

it('Asercion', () =>{ //BDD
    cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name')//El 'and' reemplaza al should, para simplifacar codigo
})

it('Asercion 2', () =>{ //BDD Esta asercion es igual a la anterior, solamente que la asercion se hace sobre JQery en vez del elemento del cyppres
    cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').then((element)=>{
        expect(element).to.be.visible
        expect(element).to.have.attr('placeholder', 'First Name')
    })
})

it('Asercion 3', () =>{ //TDD
    cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').then((element)=>{
        assert.equal(element.attr('placeholder'),'First Name')
    })
})

})