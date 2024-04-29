// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Result')
  })
  it('should update the result when the A+B button is clicked', () => {
    cy.visit('/')
    cy.get('#a').type('10'); // Type '10' into the input with id 'a'
    cy.get('#b').type('20'); // Type '20' into the input with id 'b'
    cy.get('#plus').click(); // Click the A+B button

    // Assert that the result is updated correctly
    cy.get('div').contains('Result: 30').should('be.visible');
  })

  it('should update the result when the A/B button is clicked', () => {
    cy.visit('/')
    cy.get('#a').clear().type('40'); // Type '40' into the input with id 'a'
    cy.get('#b').clear().type('10'); // Type '4' into the input with id 'b'
    cy.get('#div').click();
    // Assert that the result is updated correctly
    cy.get('div').contains('Result: 4').should('be.visible');
  });
})

