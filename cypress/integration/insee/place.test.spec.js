describe('Insee', () => {

  beforeEach(() => {
    cy.visit('/insee');

    // Aliases
    cy.get('button').contains('Lieu').as('placeButton');
  });

  it('Selecting a place should automatically set the autocompletion value; clearing it should remove that value', () => {
    cy.get('@placeButton').click();
    cy.focused().invoke('attr', 'placeholder').should('contain', 'Entrez un lieu');
    cy.focused().type('Par');
    cy.contains('Paris').click();

    cy.get('@placeButton').click();
    cy.focused().should('contain.value', 'Paris');
    cy.contains('a', 'Paris');

    cy.get('body').click(0, 0); // Blur

    cy.get('@placeButton').click();
    cy.focused().should('contain.value', 'Paris');
    cy.contains('a', 'Paris');

    cy.focused().clear();

    cy.get('body').click(0, 0);

    cy.get('@placeButton').contains('Lieu').click();

    cy.focused().should('have.value', '');
  });

  it('Search place followed by blur should automatically select the first result', () => {
    cy.get('@placeButton').click();

    cy.focused().type('Par');
    cy.contains('a', 'Paris');

    cy.get('body').click(0, 0);

    cy.get('@placeButton').contains('Paris');
  });

  it('Search should eventually hide loader, and when no result is available it should display a message', () => {
    cy.get('@placeButton').click();

    cy.focused().type('P');
    cy.get('.spinner-border').should('not.exist'); // Not enough

    cy.focused().type('p');
    cy.contains('Aucun lieu trouvé');
  });

  it('Clear button should clear the query and the value', () => {
    cy.get('@placeButton').click();

    cy.focused().type('P');
    cy.contains('a', 'Paris');

    cy.focused().next().click();

    cy.focused().should('have.value', '');

    cy.get('body').click(0, 0);

    cy.get('@placeButton').contains('Lieu').click();

    cy.focused().should('have.value', '').type('P');
    cy.contains('a', 'Paris').click();

    cy.get('@placeButton').contains('Paris').click();

    cy.focused().should('contain.value', 'Paris');
    cy.focused().next().click();

    cy.focused().should('have.value', '');

    cy.get('body').click(0, 0);

    cy.get('@placeButton').contains('Lieu');
  });
});
