describe('Offline', () => {

  beforeEach(() => {
    cy.insee();
  });

  // Important: after calling `offline`, always call `online` otherwise it will break Cypress
  const offline = () => {
    cy.log('Going offline')
      .then(() => {
        return Cypress.automation('remote:debugger:protocol',
          {
            command: 'Network.enable',
          })
      })
      .then(() => {
        return Cypress.automation('remote:debugger:protocol',
          {
            command: 'Network.emulateNetworkConditions',
            params: {
              offline: true,
              latency: -1,
              downloadThroughput: -1,
              uploadThroughput: -1,
            },
          })
      })
  };

  const online = () => {
    cy.log('Going online')
      .then(() => {
        return Cypress.automation('remote:debugger:protocol',
          {
            command: 'Network.emulateNetworkConditions',
            params: {
              offline: false,
              latency: -1,
              downloadThroughput: -1,
              uploadThroughput: -1,
            },
          })
      })
      .then(() => {
        return Cypress.automation('remote:debugger:protocol',
          {
            command: 'Network.disable',
          })
      })
  };

  it('A message is displayed if the server is unreachable', () => {
    offline();

    cy.get('@surnameInput').type('PETIT');

    cy.get('@submitButton').click();

    cy.contains('La connexion au serveur n\'a pas pu être établie');

    online();

    cy.get('@submitButton').click();

    cy.get('body').contains('Jean-Marie');

    cy.get('body').should('not.contain', 'La connexion au serveur n\'a pas pu être établie');
  });

});
