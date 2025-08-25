const express = require("express")
const app = express();

//we can set as many route handler as we want to 
//we can also wrap them in an array 
//doest make any difference

app.use("/",(req,res,next)=>{
    console.log("handler 1")
    next()
    // res.send("Route handler 1")  //if we dont do res.send() then an infinite loop happens
    // next()
},(req,res,next)=>{
    console.log("handler 2")
    next()
    // res.send("route handler 2")   //in this case route handler  1 will be printed
},(req,res,next)=>{
    console.log("handler 3")
    next();
},(req,res,next)=>{
    console.log("handler 4")
    next();
},(req,res,next)=>{
    console.log("handler 5")
    res.send("5th handler")
})

//but if we pass "next" argument in the first handler then we might be able to see route handler 2 . But it depends on the position of next

app.listen(3000,()=>{
    console.log("server up and running")
})