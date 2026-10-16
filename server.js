const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        let name = '';

        req.on('data', (chunk) => {
            name += chunk;
        });

        req.on('end', () => {
            const data = JSON.parse(fs.readFileSync('data.json'));
            data.names.push(name);
            fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
            res.writeHead(200);
            res.end('Saved');
        });
    } else if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('style.css'));
    } else if (req.url === '/script.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(fs.readFileSync('script.js'));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('index.html'));
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at port 3000...");
});