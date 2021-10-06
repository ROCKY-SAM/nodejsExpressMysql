### npm install express mysql body-parser --save

## What we do are:
> - import express and body-parser modules. Express is for building the Rest apis, and body-parser helps to parse the request and create the req.body object that we will need to access in our routes.
> -  create an Express app, then add body-parser middlewares using app.use() method.
> - define a GET route which is simple for test.
> - listen on port 1200 for incoming requests.

Now we can run the app with command: node server.js.
Open your browser, enter the url http://localhost:1200/, you will see:

Express - For Server
MySql - Interacting with Database Server 
body-parser - It allows us to send the JSON data to Node API 
