describe('General', () => {

  beforeEach(() => {
    cy.insee();
  });

  it('Surname input should be initially focused', () => {
    cy.get('@surnameInput').should('have.focus');
  });

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

  it('Regression: dates should be displayed the same way, regardless the timezone of the browser', () => {
    const searchAndCheckDates = () => {
      cy.reload();

      cy.get('@surnameInput').type('PETIT');
      cy.get('@givenNameInput').type('Marie Anne');
      cy.get('@submitButton').click();

      cy.contains('06/05/1960');
      cy.contains('09/08/1985');

      cy.get('body').should('not.contain', '04/05/1960');
      cy.get('body').should('not.contain', '07/05/1960');
      cy.get('body').should('not.contain', '08/08/1985');
      cy.get('body').should('not.contain', '10/08/1985');
    };

    const setTimezone = tz =>
      Cypress.automation('remote:debugger:protocol', {
        command: 'Emulation.setTimezoneOverride',
        params: {
          timezoneId: tz,
        },
      }).then(() => {
        const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
        if(timeZone !== tz) {
          console.log(`Warning: ${timeZone} != ${tz}, cannot perform timezone tests correctly`);
        }
      });

    setTimezone('US/Pacific');
    Cypress.automation('remote:debugger:protocol', {
      command: 'Emulation.setTimezoneOverride',
      params: {
        timezoneId: 'US/Pacific',
      },
    });
    searchAndCheckDates();

    setTimezone('Asia/Tokyo');
    searchAndCheckDates();

    setTimezone('');
    searchAndCheckDates();
  });

});
