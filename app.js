const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>PAPAJ</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.writeHead(302, {'Location': '/'});
    return res.end();
  }

  if (url === '/message') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>PAPAJ</title></head>')
    res.write('<body>This will be a message page</body>')
    res.write('</html>');
    return res.end();
  }
});

server.listen(3000);
