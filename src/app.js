const express = require("express")
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")
connectDB().then(()=>{
     console.log("database connected ")
     app.listen(3000,()=>{  //connect db first and then start server
     console.log("server up on port 3000")
})
 }).catch((err)=>{
     console.error("database connection failed")
})



//api to add user in database
app.post("/signup", async (req,res)=>{

    const user = new User({
     firstName : "Aman",
     lastName : "Gupta",
     emailId : "gupta.aman@gmail.com",
     password : "Aman@123"
   }) //creating new instance of a User model
  await user.save()  //returns a promise
    res.send("user added succesfully") // if we dont send a response back infinte loop begins
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

