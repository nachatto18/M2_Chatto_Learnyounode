// Require the fs module to work with the file system
const fs = require('fs');
const path = require('path');  // Use path to work with file paths

// Export a function that takes three arguments:
// - dir (directory to read)
// - ext (file extension to filter by)
// - callback (a function to handle the result)
module.exports = function(dir, ext, callback) {
  // Use fs.readdir to read the files in the directory
  fs.readdir(dir, (err, list) => {
    if (err) {
      // If there's an error (like directory doesn't exist), call the callback with the error
      return callback(err);
    }

    // Filter the files by the given extension (without the dot)
    const filteredFiles = list.filter(file => path.extname(file) === '.' + ext);
    
    // Call the callback function with the filtered files (no error)
    callback(null, filteredFiles);
  });
};
