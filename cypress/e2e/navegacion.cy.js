describe('Navegacion', {browser: 'chrome'}, ()=>{
    
    it('Navegar a nuestra primer pagina', ()=>{
        cy.visit('https://platzi.com/')
    })

    it('Recargar pagina', ()=>{
        cy.reload()
    })

    it('Recargar pagina de forma forzada', ()=>{
        cy.visit('https://platzi.com/')
        cy.reload(true)
    })

    it('Navegar hacia atras', ()=>{
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&hl=es-419&sxsrf=AB5stBhwVE8KF55tdy6CTyGdGk9NG1cYTw%3A1688504879484&source=hp&ei=L4qkZKW5G8bf1sQP4vK6qAE&iflsig=AD69kcEAAAAAZKSYP4DJFzPB51tNVmJoRuNxMtRR9oPh&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAEYADINCC4QxwEQ0QMQigUQJzILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoNCC4QxwEQ0QMQ6gIQJzoHCCMQ6gIQJzoECCMQJzoRCC4QgwEQxwEQsQMQ0QMQgAQ6DQguEIoFEMcBENEDECc6BwgjEIoFECc6DQgAEIoFELEDEIMBEEM6BwgAEIoFEEM6CggAEIoFELEDEEM6BwguEIoFEEM6DQguEIoFELEDEIMBEEM6CggAEIAEELEDEAo6DQgAEIAEELEDEIMBEApQyghYrQxgjxdoAXAAeACAAWWIAZgEkgEDNS4xmAEAoAEBsAEK&sclient=gws-wiz')
        cy.go('back') // or cy.go(-1)
        cy.go('forward') // or cy.go(1)

        
    })
})