export class LoginPage {

    //The color of active button in rgb format
    activeButtonColor: String = 'rgb(0, 96, 176)';
    errorTextColor: String = 'rgb(255, 0, 0)';


    //Page elements

    ukrLangBtnLayout(): Cypress.Chainable<any> {
        return cy.contains('укр').parents('[role="button"]');
    }

    rusLangButtonLayout(): Cypress.Chainable<any> {
        return cy.contains('рус').parents('[role="button"]');
    }

    engLangButtonLayout(): Cypress.Chainable<any> {
        return cy.contains('eng').parents('[role="button"]');
    }

    rusLangButton(): Cypress.Chainable<any> {
        return cy.contains('рус');
    }

    engLangButton(): Cypress.Chainable<any> {
        return cy.contains('eng');
    }

    checkboxLabel(): Cypress.Chainable<any> {
        return cy.get('#gwt-uid-2').siblings('label');
    }

    emailField(): Cypress.Chainable<any> {
        return cy.get('input[type="text"]');
    }

    passwordField(): Cypress.Chainable<any> {
        return cy.get('input[type="password"]');
    }

    enterButton(): Cypress.Chainable<any> {
        return cy.get('.v-button-large:eq(0)');
    }

    alertPopup(): Cypress.Chainable<any> {
        return cy.get('.popupContent .v-window-wrap');
    }

    alertPopupErrorTextLayout(): Cypress.Chainable<any> {
        return cy.get('.v-formlayout-contentcell').find('span');
    }

    alertPopupCloseButton(): Cypress.Chainable<any> {
        return cy.get('.popupContent .v-window-wrap').find('.v-button-caption');
    }

    circleLoader(): Cypress.Chainable<any> {
        return cy.get('.v-app-loading');
    }









}