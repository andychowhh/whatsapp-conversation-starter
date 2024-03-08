describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.window().then((win) => {
      cy.stub(win, 'open').as('wndopen');
    });
  });

  it('block opening a new tab when there is no phone number input', () => {
    cy.contains('Start Conversation').click();

    cy.get('@wndopen').should('not.be.called');
  });

  it('opens a new tab to the whatsapp page, given that the phone number is entered', () => {
    cy.contains('+852').click();
    cy.get('[data-cy="select-option-Afghanistan"]').click();

    cy.get('input[placeholder="Enter a phone number"]').type('98765432');

    cy.contains('Start Conversation').click();

    cy.get('@wndopen').should(
      'have.been.calledOnceWithExactly',
      'https://wa.me/9398765432',
      '_blank'
    );
  });
});
