const express=require("express");
const mongoose=require("mongoose");
const ejs=require("ejs");
const Body=require("body-parser");
const dotenv=require("dotenv");
const app=express();

dotenv.config({path:'./config.env'});
require('./DB/conn');
app.use(express.json());
app.use(require('./Router/auth'));

const url=process.env.DATABASE;
const PORT=process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send("Hello world");
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});