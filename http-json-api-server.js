const http = require('http');
const url = require('url');

// Get the port number from the command-line arguments
const port = process.argv[2];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL of the request
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.searchParams.get('iso');

  // Set the response header to application/json
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime' && query) {
    // Parse the ISO date string
    const date = new Date(query);
    // Respond with hour, minute, and second
    const timeData = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.end(JSON.stringify(timeData));

  } else if (pathname === '/api/unixtime' && query) {
    // Parse the ISO date string
    const date = new Date(query);
    // Respond with unixtime (milliseconds since Jan 1, 1970)
    const unixTimeData = {
      unixtime: date.getTime()
    };
    res.end(JSON.stringify(unixTimeData));

  } else {
    // If the URL or query is not valid, send an error response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid endpoint or query parameter missing');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
