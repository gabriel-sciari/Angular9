const express=require("express");
const app=express();
app.use(express.static("./view"));
app.listen(8800,()=>{console.log("Listening")})