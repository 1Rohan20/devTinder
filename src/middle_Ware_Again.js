const express = require("express")
const app = express()

app.get("/user",(req,res)=>{
     res.send({firstname:"Rohan",lastname:"Gupta"})
})

app.listen(3000,()=>{
    console.log("server up and running")
})