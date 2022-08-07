const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

/* Middlewares */

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

/* Home Route */

app.get('/', function (req, res) {
  res.render('body');
});

/* Server running on port 3000 */

let http = require('http');
let server = express().use('/', app);
http.createServer(server).listen(port, () => {
  console.log('Listening on ' + port);
});

