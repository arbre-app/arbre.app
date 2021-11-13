Cypress.Commands.add('insee', (anchor = '') => {
  cy.visit('/insee' + anchor);

  // Aliases
  cy.get('input[name=surname]').as('surnameInput');
  cy.get('input[name=givenName]').as('givenNameInput');
  cy.get('#place-dropdown').as('placeButton');
  cy.get('select[name=sortBy]').as('sortBySelect');
  cy.get('select[name=rangeType]').as('rangeTypeSelect');
  cy.get('select[name=sortOrder]').as('sortOrderSelect');
  cy.contains('button', 'Rechercher').as('submitButton');
});
