// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Fabro')
    cy.get('#email').type('gabrielfabro@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
  })

  Cypress.Commands.add('login', () => {
    cy.visit('https://apphml.forsign.digital/signin')
    cy.get('[data-test="inp-email"]')
        .type(Cypress.env('user_name'))
      cy.get('[data-test="inp-password"]')
        .type(Cypress.env('user_password'))
      cy.get('[data-test="btn-login"]').click()
  })