import { LoginPage } from './../pages/loginPage';
export class Actions {


    logger(logText: string): void {
        cy.log(logText);
    }
    
}