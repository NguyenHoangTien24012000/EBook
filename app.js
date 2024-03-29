const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


const fs = require('fs');
try {
    const data = fs.readFileSync('index.html', 'utf8');
    // /Users/nguyenhoangtien/Documents/TienDiCode/My project/EBook/SoftwareDevelopment/CleanCode
    for(let i = 0; i <= 20; i++){
        fs.writeFile(path.join(__dirname, 'SoftwareDevelopment', 'CleanCode', `step${i}.html`), data, err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    }
  } catch (err) {
    console.error(err);
  }



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});