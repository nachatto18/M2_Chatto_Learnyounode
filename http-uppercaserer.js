const http = require('http');
const through2Map = require('through2-map');

// Get the port from the command line arguments
const port = process.argv[2];

// Create the HTTP server
const server = http.createServer(function (req, res) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.end('Only POST requests are accepted');
  }

  // Pipe the incoming data through a transform stream
  req.pipe(through2Map(function (chunk) {
    // Convert the chunk to a string and then to uppercase
    return chunk.toString().toUpperCase();
  })).pipe(res); // Pipe the transformed data to the response
});

// Start the server to listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
