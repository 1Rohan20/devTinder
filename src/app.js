const express = require("express")
const connectDB = require("./config/database")
const app = express();

connectDB().then(()=>{
     console.log("database connected ")
     app.listen(3000,()=>{  //connect db first and then start server
     console.log("server up on port 3000")
})
 }).catch((err)=>{
     console.error("database connection failed")
})























// app.use("/hellloo",(req,res)=>{
//     res.send("hello world")
// })


// //http methods
// app.get("/", (req,res)=>{
//      res.send("hello from server")
// })

// app.get("/test", (req,res)=>{
//     res.send("test here")
// })

// app.get("/hello", (req,res)=>{
//     res.send("hello hello hello")
// })

