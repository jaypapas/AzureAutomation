/// <reference types="cypress-downloadfile"/>


describe('Download Test',()=>
{
    it('Download Tests', ()=>{
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

    })
})