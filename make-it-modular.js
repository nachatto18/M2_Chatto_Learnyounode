// Import the mymodule.js module
const mymodule = require('./mymodule');

// Get the directory and file extension from command-line arguments
const dir = process.argv[2];  // Directory path
const ext = process.argv[3];  // File extension (without the dot)

// Call the function from mymodule.js
mymodule(dir, ext, (err, files) => {
  if (err) {
    // If there's an error, print it
    return console.error('There was an error:', err);
  }

  // If no error, print the filtered files
  files.forEach(file => {
    console.log(file);  // Print each file name
  });
});
