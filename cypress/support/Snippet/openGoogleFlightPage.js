Cypress.Commands.add("openGoogleFlightPage", () => {
    cy.visit('https://www.google.com/travel/flights/search')
    cy.url().should('eq', 'https://www.google.com/travel/flights/search')
})