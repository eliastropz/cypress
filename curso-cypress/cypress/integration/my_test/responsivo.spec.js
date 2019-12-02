///  <reference types="cypress" /> 

describe('Personal Website home page', () => {
    beforeEach(() => {
        cy.viewport(320, 568);
        cy.visit('https://tailomateus.github.io/')
    })
    
    it('has a visible mobile profile picture', () => {
        
        cy.get('.img_profile').should('be.visible')
      })
  })

