
export class DonationsRegisterTablePage{
    emailAddress = 'h2';
    title = 'h1';
    tabNavigation = 'ul[id="table-tabs"] li';
    tableNameTextBox = 'input[id="table_name"]';
    firstNameTextbox = 'input[id="user_name-firstName"]';
    lastNameTextbox = 'input[id="user_name-lastName"]';
    emailTextbox = 'input[id="user_email"]';
    
    verifyEmailAdressIsDisplayed(email: string){
        cy.get(this.emailAddress, { timeout: 50000 }).should('be.visible');
        cy.get(this.emailAddress).should('include.text', email);
    }

    clickNavigationTab(tabName: string) {
        cy.get(this.tabNavigation).contains(tabName).click();
    }
}

