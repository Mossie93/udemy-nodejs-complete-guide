const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>PAPAJ</title></head>')

  if (url === '/') {
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
  }

  if (url === '/message') {
    res.write('<body>Received a message!</body>')
  }
  
  res.write('</html>');
  res.end();
});

server.listen(3000);
