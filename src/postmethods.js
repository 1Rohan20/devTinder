const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello ");
})

app.listen(7777,()=>{
    console.log("hello from the server")
})