const express = require("express")
const app = express();

app.use("/",(req,res,next)=>{
    next()
    res.send("Route handler 1")  //if we dont do res.send() then an infinite loop happens
    // next()
},(req,res,next)=>{
    next()
    res.send("route handler 2")   //in this case route handler  1 will be printed
})

//but if we pass "next" argument in the first handler then we might be able to see route handler 2 . But it depends on the position of next

app.listen(3000,()=>{
    console.log("server up and running")
})