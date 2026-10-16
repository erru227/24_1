const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let name = '';
        req.on('data', (chunk) => name += chunk);
        req.on('end', () => {
            const data = JSON.parse(fs.readFileSync('data.json'));
            data.names[data.names.length] = name;
            fs.writeFileSync('data.json', JSON.stringify(data));
            res.end('Saved');
        });
    } else if (req.url === '/data.json') {
        res.end(fs.readFileSync('data.json'));
    } else if (req.url === '/style.css') {
        res.setHeader('Content-Type', 'text/css');
        res.end(fs.readFileSync('style.css'));
    } else if (req.url === '/script.js') {
        res.end(fs.readFileSync('script.js'));
    } else {
        res.end(fs.readFileSync('index.html'));
    }
}).listen(process.env.PORT || 3000);
