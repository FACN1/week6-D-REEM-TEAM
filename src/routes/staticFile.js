const fs = require('fs');
const path = require('path');
const publicPath = path.join(__dirname, '../../public');

var staticFile = (req, res) => {
    // var parsedUrl = url.parse(req.url);
    var filePath = path.join(publicPath, req.url);
    if (filePath.charAt(filePath.length-1) === '/') filePath = path.join(filePath, 'index.html');
    var extension = String(path.extname(filePath)).toLowerCase();

    var header = {'content-type': 'text/plain'};
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.jpg': 'image/jpg'
    };
    var contentType = mimeTypes[extension] || 'text/plain';

    fs.readFile(filePath, (error, file) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, header);
                res.write('Error 404: Page not Found');
                res.end();
            } else {
                res.writeHead(500, header);
                res.write('Error 500: Internal Server Error');
                res.end();
            }
            return;
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.write(file, 'utf-8');
        res.end();
    })

}
module.exports = staticFile;
