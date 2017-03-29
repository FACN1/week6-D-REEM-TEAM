const http = require('http');
const router = require('./router.js');

const port = process.env.PORT || 3000;

var server = http.createServer(router);

server.listen(port, (err) => {
  if (err) throw err;
  console.log('Server is running on port: ', port);
});
