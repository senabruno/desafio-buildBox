export default {

    getClassField() {
        return cy.get('[class="field"]')
    },

    getDeliveryMethodMotocicle() {
        return cy.get('[class="delivery-method"]').find('[alt="Moto"]')
    },

    getDeliveryMethodRBicycle() {
        return cy.get('[class="delivery-method"]').find('[alt="Bicicleta"]')
    },

    getDeliveryMethodCar() {
        return cy.get('[class="delivery-method"]').find('[alt="Van/Carro"]')
    },

    getDriveLicense() {
        return cy.get('[class="dropzone"]')
    },

    getButtonSuccess() {
        return cy.get('[class="button-success"]')
    },

    getModalConfirmation() {
        return cy.get('.swal2-modal')
    },

    getErrorMessage() {
        return cy.get('[class="alert-error"]')
    }
}