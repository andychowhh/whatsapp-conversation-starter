describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.window().then((win) => {
      cy.stub(win, 'open').as('wndopen');
    });
  });

  it('blocks opening a new tab when there is no phone number input', () => {
    cy.contains('Start Conversation').click();

    cy.get('@wndopen').should('not.be.called');
  });

  it('opens a new tab to the whatsapp page, given that the phone number is entered', () => {
    // cy.contains('+852').click();
    // cy.get('[data-cy="select-option-Afghanistan"]').click();

    cy.get('input[placeholder="Enter a phone number"]').type('98765432');

    cy.contains('Start Conversation').click();

    cy.get('@wndopen').should(
      'have.been.calledOnceWithExactly',
      'https://wa.me/85298765432',
      '_blank'
    );
  });

  it('shows an error message when clicking start conversation button with invalid phone number', () => {
    cy.get('input[placeholder="Enter a phone number"]').type('987');

    cy.contains('Start Conversation').click();

    cy.get('[data-testid="input-error"]').contains(
      'The phone number is invalid!'
    );
  });
});
