describe('Navigation', () => {
  it('Load homepage, navigate to Insee and back', () => {
    function checkOnHomepage() {
      cy.contains('arbre.app');
      cy.contains('Version');
    }

    function checkOnInsee() {
      cy.contains('Rechercher');
      cy.contains('La base contient');
    }

    cy.visit('/');
    checkOnHomepage();

    cy.contains('Fichier des décès de l\'Insee').click();
    checkOnInsee();

    cy.reload();
    checkOnInsee();

    cy.go(-1);
    checkOnHomepage();
  });
});
