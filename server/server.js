const express = require('express');
const app = express();
const path = require('path');
const proxy = require('http-proxy-middleware');

app.use('/books/:id', express.static(path.join(__dirname, '/../public')));


app.use('/books/:id/info', proxy({ target: 'http://localhost:3002', changeOrigin: true }));

app.use('/books/:id/reviews', proxy({ target: 'http://localhost:3003', changeOrigin: true }));

app.use('/books/:id/details', proxy({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/books/:id/authors', proxy({ target: 'http://127.0.0.1:3000', changeOrigin: true }));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});