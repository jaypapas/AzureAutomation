describe('Google test', () => {

    it('Simple search on google website', () => {
        cy.visit('http://www.google.com')

        cy.title().should('contain', 'Google')

        cy.get('.gLFyf').type('ps5')

        cy.get('.FPdoLc > center > .gNO89b').type('{enter}', { force: true })

        cy.get('.hdtb-msel').should('be.visible')

    })
})