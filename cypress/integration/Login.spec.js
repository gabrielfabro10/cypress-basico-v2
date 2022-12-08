/// <reference types="Cypress" />


describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://appdev.forsign.digital/signin')
    })

    it.only('login', () => {
      cy.intercept('/api/company').as('company')
      cy.get('[data-test="inp-email"]')
        .type(Cypress.env('user_name'))
      cy.get('[data-test="inp-password"]')
        .type(Cypress.env('user_password'))
      cy.get('[data-test="btn-login"]').click()
      cy.location('pathname').should('be.oneOf', ['/signin/workspace'])
      cy.wait('@company')
      cy.get('#mui-component-select-company')
        .click()
      cy.get('[data-value="149"]')
        .contains('Quality Assurance')
        .click()
      cy.get('[data-test="btn-continue"]')
          .click()
      cy.location('pathname').should('be.oneOf', ['/home'])
    })
  })
  