const fs = require('fs');
const dbConnection = require('./db_connection.js');

/* Read db_build database initialisation script
 * Execute the script as a database query
 */
fs.readFile(`${__dirname}/db_build.sql`, (file) => {
  dbConnection.query(file.toString(), (err, res) => {
    if (err) throw err;
    console.log('Database created with result: ', res);
  }
});
