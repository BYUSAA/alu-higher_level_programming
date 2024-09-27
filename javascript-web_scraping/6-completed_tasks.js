#!/usr/bin/node // Informs the system to use Node.js to run this script

const request = require('request'); // Imports the 'request' module to make HTTP requests
request(process.argv[2], (err, res, body) => { // Makes a request to the URL passed as a command-line argument
  if (!err) { // If no error occurred during the request
    const tasks = JSON.parse(body); // Parses the response body into a JavaScript object (an array of tasks)
    const completed = {}; // Initializes an empty object to track completed tasks per user
    tasks.forEach((task) => { // Iterates through each task in the array
      if (task.completed && completed[task.userId] === undefined) { // If the task is completed and the userId has not been recorded
        completed[task.userId] = 1; // Initializes the count for this userId at 1
      } else if (task.completed) { // If the task is completed and the userId is already recorded
        completed[task.userId] += 1; // Increments the count of completed tasks for this userId
      }
    });
    console.log(completed); // Prints the object containing the count of completed tasks per user
  }
});
