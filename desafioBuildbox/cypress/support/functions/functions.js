import functions from '../selectors/selectors'

export default {

    registrationButton() {
        cy.contains('Cadastre-se para fazer entregas').click()
    },

    confirmationRegistrationScreen() {
        cy.contains('Cadastre-se para fazer entregas')
    },

    dataFilledInCorrectly() {
        functions.getClassField().eq(0).type('Bruno')
        functions.getClassField().eq(1).type('01001001020')
        functions.getClassField().eq(2).type('teste@buildbox.com')
        functions.getClassField().eq(3).type('41988888888')
        functions.getClassField().eq(4).type('80630220')
        functions.getClassField().eq(5).click()
        functions.getClassField().eq(7).type('123')
        functions.getClassField().eq(8).type('casa com 8 andares')
    },

    selectBicycleMethod() {
        functions.getDeliveryMethodRBicycle().click()
    },

    uploadLicense() {
        functions.getDriveLicense().find('input').selectFile('cypress/fixtures/driveLicense.png', {force: true})
    },

    registrationConfirmationButton() {
        functions.getButtonSuccess().click()
    },

    confirmationWindow() {
        functions.getModalConfirmation().should('contain', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    },

    emptyFields() {
        functions.getClassField().eq(0).find("input").should("be.empty")
        functions.getClassField().eq(1).find("input").should("be.empty")
        functions.getClassField().eq(2).find("input").should("be.empty")
        functions.getClassField().eq(3).find("input").should("be.empty")
        functions.getClassField().eq(4).find("input").should("be.empty")
        functions.getClassField().eq(7).find("input").should("be.empty")
        functions.getClassField().eq(8).find("input").should("be.empty")
    },

    notSelectedDeliveryMethod() {
        functions.getDeliveryMethodRBicycle().should("not.be.checked")
        functions.getDeliveryMethodMotocicle().should("not.be.checked")
        functions.getDeliveryMethodCar().should("not.be.checked")
    },

    emptyDriveLicense() {
        functions.getDriveLicense().find("input").should("be.empty")
    },

    errorMessagesConfirmation() {
        functions.getErrorMessage().eq(0).should('contain', 'É necessário informar o nome')
        functions.getErrorMessage().eq(1).should('contain', 'É necessário informar o CPF')
        functions.getErrorMessage().eq(2).should('contain', 'É necessário informar o email')
        functions.getErrorMessage().eq(3).should('contain', 'É necessário informar o CEP')
        functions.getErrorMessage().eq(4).should('contain', 'É necessário informar o número do endereço')
        functions.getErrorMessage().eq(5).should('contain', 'Selecione o método de entrega')
        functions.getErrorMessage().eq(6).should('contain', 'Adicione uma foto da sua CNH')
    }

}