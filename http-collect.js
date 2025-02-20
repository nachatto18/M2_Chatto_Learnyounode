// Load the 'http' module
const http = require('http');

// URL from the command-line argument
const url = process.argv[2];

// Variable to store all the data
let collectedData = '';

// Send an HTTP GET request to the URL
http.get(url, (response) => {
  // Set the encoding of the response to UTF-8
  response.setEncoding('utf8');

  // Listen for the 'data' event and collect each chunk of data
  response.on('data', (chunk) => {
    collectedData += chunk;  // Append the chunk to the collectedData string
  });

  // Handle the 'end' event (when the response has been fully received)
  response.on('end', () => {
    // Print the number of characters received
    console.log(collectedData.length);
    // Print the complete string of data
    console.log(collectedData);
  });

  // Handle any errors during the request
  response.on('error', (err) => {
    console.error('Error: ', err);
  });
});
