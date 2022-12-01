/// <reference types="Cypress" />


describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://apphml.forsign.digital/signin')
    })

    it.only('login', () => {

      cy.get('[data-test="inp-email"]')
        .type(Cypress.env('user_name'))
      cy.get('[data-test="inp-password"]')
        .type(Cypress.env('user_password'))
      cy.get('[data-test="btn-login"]').click()
      
      cy.contains('Página inicial').should('be.visible', {delay: 6000 })
    })
  })
  