
const express = require('express');
const app = express();

// cert bot expect files in var/www/html
// to be served stiastically
// so that it can find challenge files
// in /var/www/html/.well-known during 
// certification renewals
// MAKE SURE var/www/html exists
app.use(express.static('var/www/html'));

app.listen(5000, function () {
  console.log('Webserver listening on port 5000');
});
