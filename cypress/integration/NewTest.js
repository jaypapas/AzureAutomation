describe('Get Text from element',()=>{
    it('get the text',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('h3').then(($pageTitle)=>{
            const pageTitle = $pageTitle.text()
            cy.log(pageTitle)
            expect(pageTitle).to.match(/Java/)
        })
    })
})