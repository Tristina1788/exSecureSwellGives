export class HomePage{
    giveAHost = '#join';

    clickGiveAHostButton(){
        cy.get(this.giveAHost).click();
    }
}

