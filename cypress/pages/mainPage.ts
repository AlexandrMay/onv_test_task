export class MainPage {

    sidebarMenuButtonsList(): Cypress.Chainable<any> {
        return cy.get('.v-nativebutton-caption');
    }
    
}