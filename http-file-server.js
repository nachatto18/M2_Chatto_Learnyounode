const http = require('http');
const fs = require('fs');
const path = require('path');

// Get the port number and file path from command-line arguments
const port = process.argv[2];
const filePath = process.argv[3];

// Create the HTTP server
const server = http.createServer(function (req, res) {
  // Create a read stream from the file path
  const fileStream = fs.createReadStream(filePath);
  
  // Set the appropriate headers for the response (optional)
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Pipe the file stream to the HTTP response
  fileStream.pipe(res);

  // Handle errors in the file stream
  fileStream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Error reading file');
  });
});

// Start the server to listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
