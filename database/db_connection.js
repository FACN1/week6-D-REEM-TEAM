const {Pool} = require('pg');
const url = require('url');
require('env2')('./config.env');
/* Create pool object from pg module
 * Require url module
 * Import process.env variables from config.env
 */

if (!process.env.DB_URL) throw new Error('Enviroment variable DB_URL must be set');

// Split DB_URL into url object
const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

// Set options for database connection (for authentication, hostname, etc)
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password: password
}

// Use SSL for encrypted tunnel if the host isn't local
options.ssl = (options.host !== 'localhost');

// Export pool for other modules to be able to use the connection pool to execute queries
module.exports = new Pool(options);
