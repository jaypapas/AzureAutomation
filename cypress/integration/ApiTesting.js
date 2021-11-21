describe('Api Testing', () => {

    it('GET request test', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        expect(response).to.not.have.property('status', 201)
        expect(response).to.have.property('status', 200)
        })
    })
})