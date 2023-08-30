describe('Aserciones', () =>{

//Visitará la siguiente pagina antes de realizar los tests
/*before(()=>{ 
    cy.visit('/automation-practice-form')
})
*/

//Antes de cada test, visitará la siguiente pagina antes de realizar los tests
beforeEach(()=>{ 
    cy.visit('/automation-practice-form')
})
afterEach(()=>{
    cy.visit('/')
})

it('Asercion', () =>{
    //cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name')
})

it('Asercion 2', () =>{ 
    //cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').then((element)=>{
        expect(element).to.be.visible
        expect(element).to.have.attr('placeholder', 'First Name')
    })
})

it('Asercion 3', () =>{ //it.only solamente correra el test actual, discriminando a los anteriores
    //cy.visit('/automation-practice-form')
    cy.url().should('include','demoqa.com')
    cy.get('#firstName').then((element)=>{
        assert.equal(element.attr('placeholder'),'First Name')
    })
})

})