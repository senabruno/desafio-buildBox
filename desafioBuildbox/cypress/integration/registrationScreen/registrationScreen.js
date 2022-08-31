import registration from "../../support/functions/functions";

When(/^I am on the home page$/, function() {
    cy.visit('https://buger-eats.vercel.app/')
})

Then(/^I click the register button$/, function() {
    registration.registrationButton()
})

Then(/^the registration screen will open$/, function() {
    registration.confirmationRegistrationScreen()
})

When(/^I fill in the data correctly$/, function() {
    registration.dataFilledInCorrectly()
})

When(/^I select the delivery method$/, function() {
    registration.selectBicycleMethod()
})

When(/^I add my driver's license photo$/, function() {
    registration.uploadLicense()
})

Then(/^I will click on the finalize registration button$/, function() {
    registration.registrationConfirmationButton()
})

Then(/^the confirmation window should appear$/, function() {
    registration.confirmationWindow()
})

When(/^I am on the home page$/, function() {
    cy.visit('https://buger-eats.vercel.app/')
})

Then(/^I click the register button$/, function() {
    registration.registrationButton()
})

Then(/^the registration screen will open$/, function() {
    registration.confirmationRegistrationScreen()
})

When(/^the fields are empty$/, function() {
    registration.emptyFields()
})

When(/^I do not select the delivery method$/, function() {
    registration.notSelectedDeliveryMethod()
})

When(/^I don't add my driver's license photo$/, function() {
    registration.emptyDriveLicense()
})

Then(/^I will click on the finalize registration button$/, function() {
    registration.registrationConfirmationButton()
})

Then(/^the error messages should appear$/, function() {
    registration.errorMessagesConfirmation()
})