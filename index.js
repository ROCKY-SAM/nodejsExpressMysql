const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./routes/customer.routes.js")(app);
app.get("/",(req,res)=>{
    res.json({message:"Welcome to mysql node js"});
});

app.listen(1200,()=>{
    console.log("Server is running on port 1200");
});