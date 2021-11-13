describe('Permalink', () => {

  it('Regression: permalink form state bug', () => {
    cy.insee('#s=PETIT&n=Jean');

    cy.contains('Jean-Marie');
    cy.contains('Antony');

    cy.get('@surnameInput').type('{selectall}{backspace}');

    cy.get('body').click(0, 0);

    cy.get('@surnameInput').should('have.value', '');
  });

  it('Permalink should restore exactly the current search query', () => {
    cy.insee();

    cy.get('@surnameInput').type('PETIT');
    cy.get('@givenNameInput').type('Jean');

    cy.get('@placeButton').click();
    cy.focused().type('Par');
    cy.contains('Paris').click();

    cy.get('@sortBySelect').select('Décès');
    cy.get('@rangeTypeSelect').select('En');
    cy.get('input[name=year]').type('1987');

    cy.get('@sortOrderSelect').select('Décroissant');

    cy.get('@submitButton').click();

    cy.contains('button', '25').click();
    cy.contains('a', /50/g).click();

    cy.get('.tab-content button.btn-info').first().click(); // TODO aria
    cy.get('#input-permalink').invoke('val').then(permalink => {
      cy.visit('/'); // This is necessary otherwise the anchor won't trigger a reload
      cy.visit(permalink);

      cy.get('@surnameInput').should('have.value', 'PETIT');
      cy.get('@givenNameInput').should('have.value', 'Jean');
      cy.get('@placeButton').contains('Paris');
      cy.get('@sortBySelect').find(':selected').contains('Décès');
      cy.get('input[name=year]').should('have.value', '1987');
      cy.get('@sortOrderSelect').find(':selected').contains('Décroissant');

      cy.contains('button', '50');

      cy.contains('résultat');

      cy.get('.tab-content button.btn-info').first().click();
      cy.get('#input-permalink').should('have.value', permalink);
    });
  });

});
