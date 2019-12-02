///  <reference types="cypress" /> 

describe('Testando conhecimento', function() {
    beforeEach(() => {
        cy.visit('https://betasun.before.com.br')
        cy.get('form').within(($form) => {
          // you have access to the found form via
          // the jQuery object $form if you need it        
          // cy.get() will only search for elements within form,
          // not within the entire document
          cy.get('#can_id').select('Distribuição')
          cy.get('#us_re').type('76826955601')
          cy.get('#us_senha').type('beta')
          cy.root().submit()
        })
      })

      it('Realizar cadastro PDV', function(){
        //cy.url().should('include', 'https://betasun.before.com.br') 
        // Acessar menu cadastro e sub-cadastro PDV
        cy.get('#menu_6 > div > span').click()
        cy.get('#submenu_6_4 > div').click()
        cy.get('.titulo').click()

   })
   
    //https://betasun.before.com.br
    it('Acessar menu ajuda', function(){
        //cy.url().should('include', 'https://betasun.before.com.br') 
        // Acessar menu cadastro e sub-cadastro PDV
        cy.get('#menu_6 > div > span').click()
        cy.get('#submenu_6_4 > div').click()
        cy.get('.titulo').click()

   })
})