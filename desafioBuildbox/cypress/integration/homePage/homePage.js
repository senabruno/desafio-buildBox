import homePage from '../../support/functions/functions'

When(/^I am on the home page$/, function() {
    cy.visit('https://buger-eats.vercel.app/')
})

Then(/^I click the register button$/, function() {
    homePage.registrationButton()
})

Then(/^the registration screen will open$/, function() {
    homePage.confirmationRegistrationScreen()
})