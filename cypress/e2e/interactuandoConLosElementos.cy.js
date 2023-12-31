describe( 'Interactuar con los elementos', () => {
    

    let texto

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

    it('Checkboxes y radio buttons', ()=>{
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


    it('Extrayendo info', function(){
        cy.visit('/automation-practice-form')

        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Ivan')

        //Esta forma no es la adeacuada, porque hay que crear por fuera una variable
        // cy.get('@nombre').then(($nombre)=>{
        //     texto = $nombre.val()
        //     expect($nombre.val()).to.equal('Ivan')
        // })
    
    cy.get('@nombre').invoke('val').should('equal','Ivan')//invoca una funcion del elemento
    cy.get('@nombre').invoke('val').as('nombreGlobal')
    })

    
    it('Compartir info', function(){
        cy.visit('/automation-practice-form')
        // cy.get('#lastName').as('nombre2')
        // cy.get('@nombre2').type(texto)
        cy.get('#firstName').type(this.nombreGlobal)
    })


    it('Interactuando con los dropdown(select)', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select(2)
        cy.get('select').select('opel').should('have.value','opel')
        cy.get('select').select('Opel').should('have.value','opel')
    })

    
    it('Interactuando con los dropdown(select) dinamico', function(){
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
        
        cy.get('#react-select-6-listbox').children().children().each(($el,index,$list)=>{
            
            if($el.text()==='Red'){
                // $el.on('click')
                $el.click() //Esta forma esta deprecada, pero en alguno navegadores todavia se debe utilizar de esta manera
            }
            
        })

        // cy.get('#react-select-6-option-3').click() // Esta opcion es la ideal, y simplificada


    })

    it('Interactuando con tablas', function(){
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
        cy.get('#customers')
        .find('th')
        .each(($el)=>{
            cy.log($el.text())
        })
        
        cy.get('#customers')
        .find('th')
        .first()
        .invoke('text')
        .should('equal','Company')

        cy.get('#customers')
        .find('th')
        .eq(1)
        .invoke('text')
        .should('equal','Contact')

        cy.get('#customers')
        .find('th')
        .eq(2)
        .invoke('text')
        .should('equal','Country')

        cy.get('#customers').find('tr').should('have.length', 7)

        cy.get('#customers')
        .find('tr')
        .eq(1)
        .find('td')
        .eq(1)
        .invoke('text')
        .should('equal','Maria Anders')

        cy.get('#customers')
        .find('tr')
        .eq(1)
        .find('td')
        .eq(1)
        .then($el=>{
            const texto = $el.text()
            expect(texto).to.equal('Maria Anders')
        })
    })

    it('Interactuando con date picker', function(){
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example')
        .find('label')
        .eq(0)
        .type('11/03/2022')

        cy.get('datepicker-overview-example').find('button').click()

    })

    it('Interactuando con modals', function(){
        cy.visit('https://demoqa.com/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    })


    it('Interactuando con modals', function(){
        cy.visit('/alerts')
        
        // const stub = cy.stub()
        // cy.on('window:confirm',stub ) // Es un listener, el stub es una forma de interceptar la llamada y poder ver el alert


        // .click()
        // .then(()=>{
        //     expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        // })

        // cy.get('#confirmButton').click()
        // cy.on('window:confirm', (confirm)=>{
        //     expect(confirm).to.equal('Do you confirm action?')
        // }) 
        // cy.contains('You selected Ok').should('exist')

        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
            return false
        }) 
        cy.contains('You selected Cancel').should('exist')

    })


    it('Interactuando con los tooltips', function(){
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')
    })


    it.only('Interactuando con drag and drop', function(){
        cy.visit('/dragabble')
        cy.get('#dragBox').trigger('mousedown', {
            which:1,
            pageX:600,
            pageY:100
        })
        .trigger('mousemove', {which:1, pageX:600, pageY: 600})
        .trigger('mouseup')

    })



})