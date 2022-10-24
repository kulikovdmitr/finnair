class CommonLocators {
    getDepartureFromLocator() {
        return cy.get('#i14 > div.e5F5td.BGeFcf > div > div > div.dvO2xc.k0gFV > div > div > input')
    }

    getDepartureFromValueLocator(airportDepartureFrom) {
        return cy.get(`[data-code='${airportDepartureFrom}']`);
    }

    getDepartureToLocator() {
        return cy.get('#i14 > div.e5F5td.vxNK6d > div > div > div.dvO2xc.k0gFV > div > div > input')
    }

    getDepartureToValueLocator(airportDepartureTo) {
        return cy.get(`[data-code='${airportDepartureTo}']`);
    }

    getSearchButtonLocator() {
        return cy.get(`#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.vg4Z0e > div:nth-child(1) > div.SS6Dqf > div.MXvFbd > div > button`);
    }
}

export default CommonLocators