import { userData } from './../data/test_data';
import { Actions } from './../actions/actions';
import { LoginPage } from './../pages/loginPage';
import { MainPage } from '../pages/mainPage';

beforeEach(() => {
    cy.visit('/');
  });

describe('Interview test task', () => {

    const loginPage = new LoginPage();
    const actions = new Actions();
    const mainPage = new MainPage();
    

    it('Checking the interface language by switching using corresponding button', 
    () => {
    
        actions.logger('Verifyuing that default Ukr language button is active by checking the style color');
        loginPage.ukrLangBtnLayout().should('have.css', 'background-color', loginPage.activeButtonColor);

        actions.logger('Verifyuing the language text of checkbox label');
        loginPage.checkboxLabel().should('contain', 'Запам\'ятати мене');

        actions.logger('Click to language menu button');
        loginPage.rusLangButton().click();

        //Этим шагом проверяется пункт чеклиста 6. Check the loader appearing during data sending or language changing.
        actions.logger('Verify that circle loader is visible until language is changing');
        loginPage.circleLoader().should('be.visible');

        actions.logger('Wait for page reloading');
        cy.wait(1000);

        actions.logger('Verifyuing Rus language button is active by checking the style color');
        loginPage.rusLangButtonLayout().should('have.css', 'background-color', loginPage.activeButtonColor);

        actions.logger('Verifyuing the language text of checkbox label');
        loginPage.checkboxLabel().should('contain', 'Запомнить меня');

        actions.logger('Click to language menu button');
        loginPage.engLangButton().click();

        //Этим шагом проверяется пункт чеклиста 6. Check the loader appearing during data sending or language changing.
        actions.logger('Verify that circle loader is visible until language is changing');
        loginPage.circleLoader().should('be.visible');

        actions.logger('Wait for page reloading');
        cy.wait(1000);

        actions.logger('Verifyuing that Eng language button is active by checking the style color');
        loginPage.engLangButtonLayout().should('have.css', 'background-color', loginPage.activeButtonColor);

        actions.logger('Verifyuing the language text of checkbox label');
        loginPage.checkboxLabel().should('contain', 'Remember me');


    });

    it('Checking the email format validation of the email field', () => {

        actions.logger('Enter the invalid email into e-mail field');
        loginPage.emailField().type('asd');

        actions.logger('Click to the Enter button');
        loginPage.enterButton().click();

        actions.logger('Check that the popup message contains example of a correct e-mail');
        loginPage.alertPopup().should('contain', 'don.joo@ggooo.com');

        actions.logger('Close the popup window');
        loginPage.alertPopupCloseButton().click();

        actions.logger('Clear the email field');
        loginPage.emailField().clear();

        actions.logger('Enter the valid e-mail into e-mail field')
        loginPage.emailField().type(userData.email);

        actions.logger('Click to the Enter button');
        loginPage.enterButton().click();

        actions.logger('Check that the popup message not contains example of a correct e-mail');
        loginPage.alertPopup().should('not.contain', 'don.joo@ggooo.com');

        actions.logger('Close the popup window');
        loginPage.alertPopupCloseButton().click();

    });

    it('Checking the password field value hiding by bullets', () => {

        actions.logger('Type any combination in the password field');
        loginPage.passwordField().type('1234');

        actions.logger('Checking that password field has security style as disc');
        loginPage.passwordField().should('have.css', '-webkit-text-security', 'disc');

    });

    it('Checking the validation of wrong credentials.', () => {

        actions.logger('Enter the incorrect email into e-mail field');
        loginPage.emailField().type('asd@asd.asd');

        actions.logger('Enter incorrectpassword in the password field');
        loginPage.passwordField().type('1234');

        actions.logger('Click to the Enter button');
        loginPage.enterButton().click();

        actions.logger('Check that the popup message contains entered email');
        loginPage.alertPopup().should('contain', 'asd@asd.asd');

        actions.logger('Check that the popup message contains contact phone number');
        loginPage.alertPopup().should('contain', '+38 050 432 77 07');

        actions.logger('Check that the popup message contains red text');
        loginPage.alertPopupErrorTextLayout().should('have.css', 'color', loginPage.errorTextColor);

        actions.logger('Close the popup window');
        loginPage.alertPopupCloseButton().click();
    });

    it('Checking the valid user login.', () => {

        actions.logger('Enter the incorrect email into e-mail field');
        loginPage.emailField().type(userData.email);

        actions.logger('Enter incorrectpassword in the password field');
        loginPage.passwordField().type(userData.password);

        actions.logger('Click to the Enter button');
        loginPage.enterButton().click();

        actions.logger('Wait for page reloading');
        cy.wait(1000);

        actions.logger('Checking that left menu sidebar with 11 buttons is visible');
        mainPage.sidebarMenuButtonsList().should('have.length', 11);

    });

});