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
      database.createRestaurant(req, res);
    } else if (parsedUrl.pathname === "/submit-review") {
      // call database.js review restaurant function (POST)
    }
  } else if (req.method === "GET") {
    if (parsedUrl.pathname === "/get-restaurants") {
      database.getRestaurants(req, res);
    } else {
      staticFile(req, res);
    }
  }
}

module.exports = router;
