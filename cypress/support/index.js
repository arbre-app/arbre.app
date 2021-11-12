import './commands';

const API_ENDPOINT = 'https://insee.arbre.app';

beforeEach(() => {
  cy.intercept('GET', `${API_ENDPOINT}/places?*`, req => {
    const places = [
      'Antony, Hauts-de-Seine, France',
      'Hauts-de-Seine, France',
      'Paris, Île-de-France, France',
      'Île-de-France, France',
      'France',
      'Belgique',
    ].map((fullname, id) => ({ id, fullname }));
    const { limit, prefix } = req.query;
    req.reply({
      statusCode: 200,
      body: {
        "code": 200,
        "results": places.filter(({ fullname }) => fullname.toLowerCase().startsWith(prefix.toLowerCase().trim())).slice(0, parseInt(limit)),
      },
    });
  }).as('places');
});
