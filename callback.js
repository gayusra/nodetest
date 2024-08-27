/*
  In Node.js, a callback is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are used to handle asynchronous operations, allowing code to run in a non-blocking manner. This means that while an asynchronous operation is being performed, the rest of the code can continue executing, and the callback function is called
  once the operation is completed.

  How Callbacks Work    
When you perform an asynchronous operation (like reading a file, making an HTTP request, or interacting with a database), you don't want your program to pause and wait for the operation to complete. Instead, you provide a callback function, which Node.js will execute when the operation finishes.
*/

const fs = require('fs');

// Asynchronous file read using a callback function
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    // Handle error if the file can't be read
    console.error('Error reading file:', err);
    return;
  }
  // If successful, the callback function processes the file's data
  console.log('File content:', data);
});

console.log('This will run before the file is read, demonstrating non-blocking behavior.');
