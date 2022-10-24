import CommonLocators from "../../support/PageObject/commonLocators";
const flightsTestData = require('../../fixtures/flight_test_values.json');

/**
 *
 */

describe('First_Test', function () {
    it('First_Test', function () {
        const commonLocators = new CommonLocators();
        cy.openGoogleFlightPage();

        //Act
        commonLocators.getDepartureFromLocator().type(flightsTestData.departureFrom);
        commonLocators.getDepartureFromValueLocator(flightsTestData.departureFrom).click();
        commonLocators.getDepartureToLocator().type(flightsTestData.departureTo);
        commonLocators.getDepartureToValueLocator(flightsTestData.departureTo).click();

        commonLocators.getSearchButtonLocator().should('be.visible');
        commonLocators.getSearchButtonLocator().click();

        //Assert
        commonLocators.getDepartureFromLocator().should('have.value',flightsTestData.departureFromName)
        commonLocators.getDepartureToLocator().should('have.value',flightsTestData.departureToName)
        //leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().should('be.visible')
        //cy.url().should('eq', `https://www.google.com/travel/flights/search?${flightsTestData.query}`);
    });
})