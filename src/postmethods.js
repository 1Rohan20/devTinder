const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello ");
})

app.get("/user",(req,res)=>{
    res.send({firstName:"Rohan",lastName:"Gupta"})
})


app.post("/user",(req,res)=>{
    //saving data to dataBase
    console.log("object")
    res.send("data saved successfully")
})
app.listen(7777,()=>{
    console.log("hello from the server")
})