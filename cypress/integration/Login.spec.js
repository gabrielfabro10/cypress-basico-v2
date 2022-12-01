/// <reference types="Cypress" />


describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://appdev.forsign.digital/signin')
    })

    it('com sucesso', () => {

      cy.get('[data-test="inp-email"]')
        .type(Cypress.env('user_name'))
      cy.get('[data-test="inp-password"]')
        .type(Cypress.env('user_password'))
      cy.contains('button', 'Login').click()
  
    })
  })


  