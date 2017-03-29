const staticFile = require('./routes/staticFile.js');

var router = (req, res) => {

  staticFile(req, res);
}

module.exports = router;
