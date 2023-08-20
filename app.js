const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>PAPAJ</title></head>')
  res.write('<b>21:37</b>')
  res.write('</html>');
  res.end();
});

server.listen(3000);
