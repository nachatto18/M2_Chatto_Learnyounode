// Load the 'http' module
const http = require('http');

// URL from the command-line argument
const url = process.argv[2];

// Send an HTTP GET request to the URL
http.get(url, (response) => {
  // Set the encoding of the response to UTF-8
  response.setEncoding('utf8');

  // Listen for the 'data' event and print each chunk of data to the console
  response.on('data', (chunk) => {
    console.log(chunk);
  });

  // Handle the 'end' event (when the response has been fully received)
  response.on('end', () => {
    // Do nothing here, just mark the end of the response
  });

  // Handle any errors during the request
  response.on('error', (err) => {
    console.error('Error: ', err);
  });
});
