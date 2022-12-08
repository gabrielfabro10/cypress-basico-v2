// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
      cy.visit('./src/index.html')
  })

  it('preenche o campo primeiro nome', () => {
      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Gabriel')
      .should('have.value', 'Gabriel')
  })

  it('preenche o campo segundo nome', () => {
      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Fabro')
      .should('have.value', 'Fabro')
  })

  it('preenche o campo email', () => {
      cy.get('input[id="email"]')
      .should('be.visible')
      .type('gabriel_fabro@hotmail.com')
      .should('have.value', 'gabriel_fabro@hotmail.com')
  })

  it('preenche o campo telefone', () => {
      cy.get('input[id="phone"]')
      .should('be.visible')
      .type('44999736698')
      .should('have.value', '44999736698')
  })

  it('clicando no dropdonw', () => {
      cy.get('#product')
      .select('blog')
      .should('have.value', 'blog');
  })

  it('seleciono o radio', () => {
      cy.get('input[name="atendimento-tat"]')
      .check('elogio')

      cy.get('input[name="atendimento-tat"]:checked')
      .should('have.value', 'elogio')
  })

  it('seleciono o checkbox ', () => {
      cy.get('#phone-checkbox')
      .check()

      cy.get('input[name="phone"]:checked')
      .should('have.value', 'phone')
  })

  it('preenche o campo como podemos te ajudar', () => {
      cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste', {delay: 0    })
      .should('have.value', 'Teste', )
  })

  it('clica no enviar e verifica se esta visivel', () => {
      cy.contains('button', 'Enviar')
      .click()
      .should('be.visible', '.error')
  })

  it('preencher os campos obrigatórios e enviar o formulario', () => {

      const longText = 'Testes, teste, teste,Testes, teste, testeTestes, teste, testeTestes, teste, testeTestes, teste, testeTestes, teste, testeTestes, teste, testeTestes, teste, testeTestes, teste, teste.'

      cy.get('#firstName').type('Gabriel')
      cy.get('#lastName').type('Fabro')
      cy.get('#email').type('gabriel_fabro@hotmail.com')
      cy.get('#open-text-area').type(longText, {delay: 0})
      cy.get('button[type="submit"]').click()
      cy.get('.success').should('be.visible')
      
  })

 it('envia o formulário com sucesso usando um comando customizado', () =>{
  cy.fillMandatoryFieldsAndSubmit()
  cy.get('.success').should('be.visible')
 })

 it('seleciona um produto (Youtube)', () => {
  cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
 })
 
 it('seleciona um produto pelo seu valor', () => {
  cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
 })

 it('seleciona um produto blog por seu indice', () => {
  cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
 })

 it('Seleciona um arquivo da pasta fixtures', () => {
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/example.json') 
  .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
  })
 })

 it('marca o tipo de atendimento "Feedback" ', () => {
  cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback")
 })

 it('marca cada tipo de atendimento" ', () => {
  cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(($radio) => {
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')
      })
 })

 it('marca ambos os checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
 })

 it('simulando um arquivo simulando drag-and-drop', () => {
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'}) 
  .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
  })
 })

 it('seleciona um arquivo utililizando uma fixture para a qual foi dada um alias', () => {
  cy.fixture('example.json').as('sampleFile')
  cy.get('input[type="file"]')
  .selectFile('@sampleFile')
  .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
  })
 })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um click', () => {
  cy.get('#privacy a').should('have.attr', 'target', '_blank')
 })

 it('verifica que a política de privacidade abre em outra removend o target e então clicando no link', () => {
  cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

  cy.contains('Talking About Testing').should('be.visible')
 })
  
})
