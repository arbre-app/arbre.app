const API_ENDPOINT = 'https://insee.arbre.app'; // TODO export this elsewhere

describe('Unavailable', () => {

  beforeEach(() => {
    cy.insee();
  });

  const interceptUnavailable = information => {
    cy.intercept(`${API_ENDPOINT}/*`, req => {
      req.reply({
        statusCode: 503,
        body: {
          code: 503,
          information
        },
      });
    });
  };

  it('A message is displayed if the server is unavailable', () => {
    interceptUnavailable();

    cy.get('@surnameInput').type('PETIT');

    cy.get('@submitButton').click();

    cy.contains('Le service est momentanément indisponible');

    cy.get('.alert-warning > button.close').click();

    cy.get('body').should('not.contain', 'Le service est momentanément indisponible');
  });

  it('A custom message is displayed if the server is unavailable and provides a message', () => {
    interceptUnavailable('Mise à jour');

    cy.get('@surnameInput').type('PETIT');

    cy.get('@submitButton').click();

    cy.contains('Le service est momentanément indisponible');
    cy.contains('Mise à jour');
  });

  it('The current search is hidden in case of an error', () => {
    cy.get('@surnameInput').type('PETIT');

    cy.get('@submitButton').click();

    cy.contains('résultat');

    interceptUnavailable();

    cy.get('@givenNameInput').type('Jean');

    cy.get('@submitButton').click();

    cy.contains('Le service est momentanément indisponible');

    cy.get('body').should('not.contain', 'résultat');
  });

});
