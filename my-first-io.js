// Load the fs module
const fs = require('fs');

// Get the file path from the command line argument (process.argv[2])
const filePath = process.argv[2];

// Read the file content synchronously
const fileContent = fs.readFileSync(filePath, 'utf8'); // 'utf8' ensures the content is read as a string

// Count the number of newlines by splitting the content by '\n' and counting the resulting array length minus one
const newlineCount = fileContent.split('\n').length - 1;

// Print the result
console.log(newlineCount);
