describe('Environment Tests',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env('SIT'))
    })

    it('Test 1',()=>{
        cy.log('Tesing..')
    })

    it('Test 2',()=>{
        cy.log('Tesing..')
    })

    it('Test 3',()=>{
        cy.log('Tesing..')
    })

    it('Test 4',()=>{
        cy.log('Tesing..')
    })
})