const fs = require('fs');
const dbConnection = require('./db_connection.js');
const path = require('path');

/* Read db_build database initialisation script
 * Execute the script as a database query
 */
fs.readFile(path.join(__dirname, './db_build.sql'), (err, file) => {
  if (err) throw err;
  dbConnection.query(file.toString(), (err, res) => {
    if (err) throw err;
    console.log('Database created with result: ', res);
    process.exit();
  });
});
