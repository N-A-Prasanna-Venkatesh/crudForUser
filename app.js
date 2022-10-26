const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ObjectId = mongoose.Types.ObjectId;
require("dotenv/config");

app.use(bodyParser.json());

//Connect to DB:
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to DB!');
});




//Routes redirecting
const userRoutes = require("./src/modules/user/user.routes");
app.use("/user",userRoutes);




//Listen to the server
app.listen(7777);