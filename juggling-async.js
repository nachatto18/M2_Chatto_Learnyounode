const http = require('http');

// Array to hold the results of each HTTP request
let results = [];
let count = 0;

// Function to handle the HTTP GET requests
function httpGet(index) {
  http.get(process.argv[index], (response) => {
    let data = '';
    
    // Set encoding to UTF-8
    response.setEncoding('utf8');

    // Collect the data as it arrives
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Once the response ends, store the result and check if all are completed
    response.on('end', () => {
      results[index - 2] = data; // Store data at the correct index (start at index 0)
      count++;

      // If all three responses are collected, print them in order
      if (count === 3) {
        results.forEach((result) => {
          console.log(result);
        });
      }
    });
  });
}

// Start the HTTP requests for all three URLs
httpGet(2); // URL 1
httpGet(3); // URL 2
httpGet(4); // URL 3
