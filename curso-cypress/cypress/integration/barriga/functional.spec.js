///  <reference types="cypress" /> 


describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('tropz')
        cy.get('[data-test=passwd]').type('123456789')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')

    })

    it('Should create an account', () => {

    })
})
