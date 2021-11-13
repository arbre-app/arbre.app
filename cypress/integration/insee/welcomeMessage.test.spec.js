describe('Welcome message', () => {

  beforeEach(() => {
    cy.visit('/insee');
  });

  const buzz = 'L\'interface a été entièrement revue';

  it('The welcome message should be displayed until it is closed', () => {
    cy.clearLocalStorage();

    cy.contains(buzz);

    cy.reload();

    cy.contains(buzz);
  });

  it('The welcome message is closed permanently', () => {
    cy.clearLocalStorage();

    cy.contains(buzz);
    cy.get('button.close').click();

    cy.reload();

    cy.get('body').should('not.contain', buzz);
  });

});
