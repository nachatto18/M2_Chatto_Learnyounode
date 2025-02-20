// Access command-line arguments (process.argv)
const args = process.argv.slice(2); // Skip the first two elements: 'node' and file path

// Sum the numbers (convert arguments to numbers)
const sum = args.reduce((total, num) => total + Number(num), 0);

// Output the sum
console.log(sum);
