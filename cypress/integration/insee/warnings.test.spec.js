describe('Warning messages', () => {

  beforeEach(() => {
    cy.insee();
  });

  it('Warnings should not appear on a normal search', () => {
    cy.get('@surnameInput').type('PETIT');
    cy.get('@submitButton').click();
    cy.get('@submitButton').should('be.enabled');

    cy.get('body').should('not.contain', 'avertissements');
  });

  it('Warnings should remain visible until they are closed, and reappear whenever they are triggered again', () => {
    cy.get('@surnameInput').type('PETIT?');
    cy.get('@submitButton').click();

    cy.contains('avertissements');
    cy.contains('caractères spéciaux');

    cy.contains('Informations').click();
    cy.contains('Revenir').click();

    cy.contains('caractères spéciaux');

    cy.get('.alert-warning > button.close').click();

    cy.get('body').should('not.contain', 'avertissements');

    cy.contains('Informations').click();
    cy.contains('Revenir').click();

    cy.get('body').should('not.contain', 'avertissements');

    cy.get('@submitButton').click();

    cy.contains('caractères spéciaux');
  });

  it('Warnings should get cleared when resetting the search form', () => {
    cy.get('@surnameInput').type('PETIT?');
    cy.get('@submitButton').click();

    cy.contains('avertissements');

    cy.contains('button', 'Réinitialiser').click();

    cy.get('body').should('not.contain', 'avertissements');
  });

});
