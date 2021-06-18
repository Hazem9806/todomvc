/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
// .env
REACT_APP_GOOGLE_CLIENTID = 'http://190889800752-r7q2j5r6o0sge8gjco4eq6sdnnvkvq10.apps.googleusercontent.com'
REACT_APP_GOOGLE_CLIENT_SECRET = 'PPvWnfTwb9FsBTc_QD1KVRhn'
GOOGLE_REFRESH_TOKEN = '1//0462cRqYB9nCvCgYIARAAGAQSNwF-L9Irj0Yo95PjS3bV1wFplhX6vO7acjlsZ-ytDWc-PoDOj7mn7sHCWVbP5pAXfd-WWACCPYI'
// initial imports ...

dotenv.config()

export default (on, config) => {
  // ...
  config.env.googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN
  config.env.googleClientId = process.env.REACT_APP_GOOGLE_CLIENTID
  config.env.googleClientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET

  // plugins code ...

  return config
}
