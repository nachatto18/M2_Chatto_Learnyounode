const net = require('net');

// Function to format the date into 'YYYY-MM-DD hh:mm'
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Create the server
const server = net.createServer((socket) => {
  // Get the current date
  const currentDate = new Date();
  
  // Format the date and send it to the client
  const timeString = formatDate(currentDate) + '\n';
  socket.write(timeString);

  // Close the connection after sending the data
  socket.end();
});

// Get the port number from command-line arguments
const port = process.argv[2];

// Start listening on the provided port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
