const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check route
    if (req.url === '/') {
        res.end('Welcome to Home Page');
    } 
    else if (req.url === '/about') {
        res.end('This is About Page');
    } 
    else if (req.url === '/contact') {
        res.end('Contact us at: contact@example.com');
    } 
    else {
        res.end('404 Page Not Found');
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});