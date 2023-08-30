describe('Esperando por elementos', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.platzi.com/')
    })

    it('Esperar por un tiempo definido', ()=>{
        cy.wait(5000)
    })

    it('Esperar por un elemento', ()=>{
        cy.get('.Nav-header-desktopCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login',{timeout:6000})
    })

    it('Esperar por un elemento y hacer una asercion', ()=>{
        cy.get('.Nav-header-desktopCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login',{timeout:6000}).should('be.visible')//Forma correcta
        cy.get('.Nav-header-desktopCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login').should('be.visible',{timeout:6000})//Forma incorrecta en este caso
    })


})


describe('Esperando por elementos', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it.only('Deshabilitar el retry', ()=>{
        // cy.get(':nth-child(3) > :nth-child(1) > .card-body', {timeout:5000})
        cy.get(':nth-child(3) > :nth-child(1) > .card-body',{timeout:0})
    })



})