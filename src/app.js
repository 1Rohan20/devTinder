const express = require("express")

const app = express();

app.get("/", (req,res)=>{
     res.send("hello from server")
})

app.get("/test", (req,res)=>{
    res.send("test here")
})

app.get("/hello", (req,res)=>{
    res.send("hello hello hello")
})

app.listen(3000,()=>{
    console.log("server up on port 3000")
})

