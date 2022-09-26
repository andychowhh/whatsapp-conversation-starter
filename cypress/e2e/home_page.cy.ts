describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.window().then((win) => {
      cy.stub(win, 'open').as('Open');
    });
  });

  it('block opening a new tab when there is no phone number input', () => {
    cy.get('input[placeholder="phone number"]').type('98765432');

    cy.contains('Start Conversation').click();

    cy.get('@Open').should(
      'have.been.calledOnceWithExactly',
      'https://wa.me/85298765432',
      '_blank'
    );
  });
});
