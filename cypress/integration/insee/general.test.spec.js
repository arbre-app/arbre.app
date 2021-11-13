describe('General', () => {

  beforeEach(() => {
    cy.insee();
  });

  // FIXME
  /*it('Surname input should be initially focused', () => {
    cy.get('@surnameInput').should('have.focus');
  });*/

  it('Simple search yields results', () => {
    cy.get('@surnameInput').type('PETIT');

    cy.get('@submitButton').click();

    cy.contains('résultat');
  });

  it('Search with no result shows message', () => {
    cy.get('@surnameInput').type('NONEXISTENT');

    cy.get('@submitButton').click();

    cy.contains('Aucun résultat');
  });

  it('Submit button is enabled iff the surname field is nonempty', () => {
    cy.get('@submitButton').should('be.disabled');

    cy.get('@surnameInput').type(' ');

    cy.get('@submitButton').should('be.disabled');

    cy.get('@surnameInput').clear().type('A');

    cy.get('@submitButton').should('be.enabled');

    cy.get('@surnameInput').clear();

    cy.get('@submitButton').should('be.disabled');

    cy.get('@givenNameInput').clear().type('B');

    cy.get('@submitButton').should('be.disabled');
  });

  it('Clear button should be displayed iff the form is different than its default state', () => {
    cy.get('body').should('not.contain', 'Réinitialiser');

    cy.get('@surnameInput').type('A');

    cy.contains('Réinitialiser');

    cy.get('@surnameInput').clear();

    cy.get('body').should('not.contain', 'Réinitialiser');

    cy.get('@givenNameInput').type('B');

    cy.contains('Réinitialiser').click();

    cy.get('body').should('not.contain', 'Réinitialiser');

    cy.get('@givenNameInput').should('have.value', '');
  });

});
