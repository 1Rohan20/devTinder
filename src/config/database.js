const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://guptarohan8907:happyboy03@firstcluster.fvtmulr.mongodb.net/devTinder')
} 
 //this is a  function
//connectDB is a function that returns us a promise then we handle the happy and sad case

module.exports = connectDB;

// connectDB().then(()=>{
//     console.log("database connected ")
// }).catch((err)=>{
//     console.error("database connection failed")
// })


//data connection is done in app.js 
//it is basically exported to app.js as app.js ia the main file that runs
