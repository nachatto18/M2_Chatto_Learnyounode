// Load the fs module
const fs = require('fs');

// Get the file path from the command line argument
const filePath = process.argv[2];

// Use the fs.readFile() function to read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Handle any error that occurs during reading
    console.error('Error reading file:', err);
    return;
  }

  // Count the number of newlines by splitting the content by '\n' and counting the resulting array length minus one
  const newlineCount = data.split('\n').length - 1;

  // Print the result
  console.log(newlineCount);
});
