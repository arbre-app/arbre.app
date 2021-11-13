describe('Navigation', () => {
  function checkOnHomepage() {
    cy.contains('arbre.app');
    cy.contains('Version');
  }

  function checkOnInsee() {
    cy.contains('Rechercher');
    cy.contains('La base contient');
  }

  it('Load homepage, navigate to Insee and back', () => {
    cy.visit('/');
    checkOnHomepage();

    cy.contains('Fichier des décès de l\'Insee').click();
    checkOnInsee();

    cy.go(-1);
    checkOnHomepage();
  });

  it('Load homepage, navigate to Insee and refresh', () => {
    cy.visit('/');
    checkOnHomepage();

    cy.contains('Fichier des décès de l\'Insee').click();
    checkOnInsee();

    cy.reload();
    checkOnInsee();
  });
});
