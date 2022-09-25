describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
  });

  it('block opening a new tab when there is no phone number input', () => {
    // cy.visit('https://wa.me', {
    //   onBeforeLoad(win) {
    //     cy.stub(win, 'open-whatsapp-tab');
    //   }
    // });

    cy.visit('/');

    cy.get('input[placeholder="phone number"]').type('98765432');

    cy.contains('Start Conversation').click();

    // cy.window().its('open-whatsapp-tab').should('be.called');
  });
});
