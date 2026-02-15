const http = require('http');

const server = http.createServer((req, res) => {
  res.write("DevOps Project is Running 🚀");
  res.end();
});

server.listen(3000);
