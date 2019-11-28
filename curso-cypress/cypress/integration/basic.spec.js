///  <reference types="cypress" /> 

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // const title = cy.title()
        // console.log(title)

        cy.title().should('be.equal')
    })

})