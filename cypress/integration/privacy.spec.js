it('testa a página de politica de privacidade de fomra idependente', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
   })