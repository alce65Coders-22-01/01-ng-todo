describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('ANGULAR');
    cy.contains('Semana 8 del bootcamp');
  });
});
