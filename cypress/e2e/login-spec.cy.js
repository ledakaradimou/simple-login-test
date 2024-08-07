describe('template spec', () => {
  it('test login with valid credentials', () => {
    cy.visit('/practice-test-login');
    cy.get('input#username').type(Cypress.env('username'));
    cy.get('input#password').type(Cypress.env('password'));
    cy.get('button#submit').click();
    cy.url().should('include','logged-in-successfully');
    cy.get('.post-title').should('exist').should('contain.text','Logged In Successfully');
  })
})