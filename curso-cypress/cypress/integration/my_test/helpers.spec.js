///  <reference types="cypress" /> 

describe('Herlpers...', () => {
    it('Wrap', () => {
        const obj = { nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //obj.should('have.property', 'nome')
        cy.wrap(obj).should('have.property', 'nome')
    })
})