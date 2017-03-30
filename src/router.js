// receives requests from index.js
// redirects requests to various handlers
const url = require('url');
const staticFile = require('./routes/staticFile.js');
const database = require('./routes/database.js');

var router = (req, res) => {
// handle URLs
  var endpoint = req.url;
  var parsedUrl = url.parse(endpoint);
  if (req.method === "POST") {
    if (parsedUrl.pathname === "/submit-restaurant") {
      // call database.js new restaurant function (POST)
    } else if (parsedUrl.pathname === "/submit-review") {
      // call database.js review restaurant function (POST)
    }
  } else if (req.method === "GET") {
    if (parsedUrl.pathname === "/get-restaurants") {
      res.writeHead(200, {"content-type": 'text/html'})
      res.end(JSON.stringify({'key': 'testValue'}));
      // call database.js get restaurant function (GET)
    } else {
      staticFile(req, res);
    }
  }
}

module.exports = router;
