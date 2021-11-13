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
        code: 200,
        results: places.filter(({ fullname }) => fullname.toLowerCase().startsWith(prefix.toLowerCase().trim())).slice(0, parseInt(limit)),
      },
    });
  }).as('places');
});

function testPersons(n) {
  const array = [];
  for(let i = 0; i < n; i++) {
    array.push(
      { birthDate: '1900-01-01', birthPlace: 'France', deathDate: '1970-01-01', deathPlace: 'France', gender: true, nom: 'TEST', prenom: `Test ${i.toString(16).toUpperCase()}` }
    );
  }
  return array;
}

const persons = [
  { birthDate: '1950-02-03', birthPlace: 'Antony, Hauts-de-Seine, France', deathDate: '1980-04-05', deathPlace: 'Paris, Île-de-France, France', gender: true, nom: 'PETIT', prenom: 'Jean-Marie' },
  { birthDate: '1960-05-06', birthPlace: 'Hauts-de-Seine, France', deathDate: '1985-08-09', deathPlace: 'Paris, Île-de-France, France', gender: false, nom: 'PETIT', prenom: 'Marie Anne' },
  ...testPersons(60),
];

beforeEach(() => {
  cy.intercept('GET', `${API_ENDPOINT}/persons?*`, req => {
    // Note: for simplicity, this is an approximation of the exact behavior
    // The goal is mainly to mock the actual server with something credible (and still useful)
    const { surname, name, place, event, after, before, order, offset, limit } = req.query;
    const offsetNumber = parseInt(offset);
    const results = persons.filter(person =>
      person.nom.toLowerCase().includes((surname || '').toLowerCase())
      && person.prenom.toLowerCase().includes((name || '').toLowerCase())
    );
    req.reply({
      statusCode: 200,
      body: {
        code: 200,
        count: results.length,
        results: results.slice(offsetNumber, offsetNumber + parseInt(limit)),
      },
    });
  }).as('persons');
});

// These are not really needed for now

beforeEach(() => {
  cy.intercept('GET', `${API_ENDPOINT}/stats/geography?*`, req => {
    const {  } = req.query;
    req.reply({
      statusCode: 200,
      body: {
        code: 200,
        results: [
          {
            count: 1,
            name: 'D-75'
          },
          {
            count: 1,
            name: 'D-19'
          },
          {
            count: 1,
            name: 'D-63'
          }
        ],
      },
    });
  }).as('statsGeography');
});

beforeEach(() => {
  cy.intercept('GET', `${API_ENDPOINT}/stats/time?*`, req => {
    const {  } = req.query;
    req.reply({
      statusCode: 200,
      body: {
        code: 200,
        results: [
          {
            count: 1,
            name: '1926'
          },
          {
            count: 1,
            name: '1932'
          }
        ],
      },
    });
  }).as('statsTime');
});
