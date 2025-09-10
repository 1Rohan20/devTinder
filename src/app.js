const express = require("express")
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")



 app.use(express.json())  //express.json() is middleware you plug into Express. It looks at incoming requests, and if the request has Content-Type: application/json, it will parse that JSON string into a proper JavaScript object and stick it on req.body.

//api to add user in database
  app.post("/signup", async (req,res)=>{
    console.log(req.body)
  //   const user = new User({
  //    firstName : "Aman",    //here we are hard coding the value
  //    lastName : "Gupta",
  //    emailId : "gupta.aman@gmail.com",
  //    password : "Aman@123"
  //  }) //creating new instance of a User model

   const user = new User(req.body) // here we are getting value from postman
   await user.save()  //returns a promise
  // a new document is added into the  user collection presemt in devTinder database
    res.send("user added succesfully") // if we dont send a response back infinte loop begins
})  
//👉 form values → JSON request → Express parses → MongoDB stores → response returns.
//https://chatgpt.com/share/68c02508-67c8-8012-91e6-2d0e071bbdcd  read this chat 


//api to fetch people from database using their email id will be a get request because we want the data

app.get("/userFromEmail", async (req,res)=>{
    const userEmail = req.body.emailId   //gets email id from Postman body (request body could be a form or anything else here we are testing using psotman)
     try{
      const user = await User.find({emailId : userEmail})
      if(user.length===0){
        res.send("user not found")
      }else{
        res.send(user)
      }
    } catch(err){
      res.status(400).send("something went wrong")
     }
    
})

app.get("/feed",async(req,res)=>{
  try{
    const allUsers = await User.find({})
    res.send(allUsers)
  } catch(err){
     res.status(400).send("something went wrong")
  }
})

app.get("/byId", async(req,res)=>{
  const id = req.body.id
  const userId = await User.findById(id)
  res.send(userId)
})



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

