const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello ");
})

// app.get("/user",(req,res)=>{
//     res.send("hello")
// })   this will be printed instead of firstName and LatNAME BECUASE OF ORDER
app.get("/user",(req,res)=>{
    res.send({firstName:"Rohan",lastName:"Gupta"})
})

// app.get("/user",(req,res)=>{
//     res.send("hello")
// })


app.post("/user",(req,res)=>{
    //saving data to dataBase
    console.log("object")
    res.send("data saved successfully")
})

app.delete("/user",(req,res)=>{
    res.send("user deleted successfully")
})

app.patch("/user",(req,res)=>{
    res.send("user info patched successfully")
})
app.listen(7777,()=>{
    console.log("hello from the server")
})