/// <reference types="cypress" />

describe('Three tests', () => {

    it('Playwright test', () => {

        //   cy.visit('https://playwright.dev/');
        //   cy.contains('Get started').click();
        //   cy.wait(2000);

    })

    it('Vega.ua test', () => {

        //   cy.visit('https://vega.ua/ukr/for_home');
        //   cy.get('[class="shadowed"]').last().click();
        //   cy.wait(2000);


    })

    it('test new test', () => {

          cy.visit('https://ukr.net');
          cy.get('[class="shadowed"]').last().click();
          cy.wait(3000);
    })



})
