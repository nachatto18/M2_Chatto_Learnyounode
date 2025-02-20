// Load the required modules
const fs = require('fs');
const path = require('path');

// Get the directory path and extension from the command-line arguments
const dirPath = process.argv[2];
const ext = process.argv[3];

// Use fs.readdir() to read the directory asynchronously
fs.readdir(dirPath, (err, list) => {
  if (err) {
    // Handle any error that occurs during reading
    console.error('Error reading directory:', err);
    return;
  }

  // Filter the list based on the file extension
  list.forEach(file => {
    if (path.extname(file) === `.${ext}`) {
      console.log(file);
    }
  });
});
