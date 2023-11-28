// Basic Promises:

// Create a function that returns a promise which resolves with a message after 2 seconds.

// let promise = new Promise(function(resolve) {
//   setTimeout(() => resolve("done"), 2000);
// });

// promise.then(
//   result => alert(result)
// );


// Write a function that returns a promise that rejects with an error message after 1 second.

// let promise = new Promise(function(reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// promise.then(
//   error => alert(error)
// );

// Build a function that takes a number as input and returns a promise that resolves to its square after 500 milliseconds.

// let number = Number(prompt("What number?"));23


// let promise = new Promise(function(resolve) {
//   setTimeout(() => resolve(number*number), 500);
// });

// promise.then(
//   result => alert(result)
// );

// Implement a function that takes an array of numbers and returns a promise that resolves with the sum of the numbers after 1 second.



// Using async/await:

// Convert an existing promise-based function into an async function and use await to handle its resolution.
// Create an async function that fetches data from an API using the Fetch API and logs the result to the console.
// Build an async function that fetches data from multiple APIs sequentially and logs the combined result.
// Write an async function that fetches data from an API and waits for a random amount of time (between 1 to 3 seconds) before resolving.
// Chaining Promises:

// Implement a function that fetches data from an API and then fetches additional data using a value from the first response.
// Create a chain of promises that performs three different asynchronous operations in sequence, with each step using the result of the previous step.
// Error Handling:

// Write an async function that fetches data from an API and handles any errors by logging an error message.
// Build an async function that fetches data from an API, and if the response is empty, rejects the promise with a custom error message.
// Parallel Execution:

// Create an async function that fetches data from three different APIs in parallel using Promise.all().
// Build an async function that fetches data from multiple APIs in parallel and returns the response from the fastest API call.
// Combining Promises:

// Implement an async function that fetches data from an API and combines it with data from a local file before resolving.
// Advanced Error Handling:

// Write an async function that fetches data from an API, and if the response status is an error (4xx or 5xx), retries the request up to 3 times with increasing delays between retries.
// Cancellation and Cleanup (Advanced):

// Build an async function that fetches data from an API and cancels the request if it takes more than 5 seconds to respond.
// Implement an async function that performs multiple tasks concurrently, and if any one task fails, cancels the remaining tasks.

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(script);

//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   alert(`Cool, the script ${script.src} is loaded`);
//   alert( _ ); // _ is a function declared in the loaded script
// });