// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");

// Import the express module
const express = require("express");

// Instantiate an Express application
const app = express();

// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(
    
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },

    app
   )
  .listen(3000, ()=>{
    console.log('server is runing at port 3000')
  });

// Create an try point route for the Express app listening on port 4000.
// This code tells the service to listed to any request coming to the / route.
// Once the request is received, it will display a message "Hello from express server."
app.get('/', (req,res)=>{
    res.json("HelloWorld node.js app on port 3000 with HTTPS on webserver")
})