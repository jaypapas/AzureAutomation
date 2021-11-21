describe('Test multiple element select', ()=>{
    it('Test',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[type=submit]').click()

        cy.get('.inventory_item_label')
        .each(function($el, index, $list){
            cy.get($el).click()
        })
    })
})