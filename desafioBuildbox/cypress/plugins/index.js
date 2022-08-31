/**
 * Plugins configuration for cypress
 *
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    const cucumber = require('cypress-cucumber-preprocessor').default
    on('file:preprocessor', cucumber())
    return config
}