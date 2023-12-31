/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: Sabuj Howlader
 */

// Module scaffolding 
const environments = {};

// configuration
environments.staging = {
    port: 3000,
    envName: 'staging'
};
environments.production = {
    port: 5000,
    envName: 'production'
};

// determine which environment was passed
const currentEnvironment = typeof (process.env.NODE_ENV === 'string') ? process.env.NODE_ENV : 'staging';

// exports the environment variables
const environmentToExports = typeof (environments[currentEnvironment] === 'object') ? environments[currentEnvironment] : environments.staging;

// Exports modules
module.exports = environmentToExports;
