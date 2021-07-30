describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should be able to add book in my reading list', async () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('#wantToRead_0').click();
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('#wantToRemove_0').click();
  });

  it('Then: I should able to set marked as finished in my reading list', async () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('#wantToRead_0').click();
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('#markasFinish_0').click();
    cy.get('#wantToRead_0').should(
      'contain.text',
      'Finished'
    );
    cy.get('#wantToRemove_0').click();
  });
});
