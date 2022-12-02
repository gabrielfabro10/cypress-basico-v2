it('testa a página de politica de privacidade de forma idependente', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
   })