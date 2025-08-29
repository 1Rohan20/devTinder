const express = require("express")
const app = express()

// app.get("/user",(req,res)=>{
//      res.send({firstname:"Rohan",lastname:"Gupta"})
// })


//a single route can have multiple route handler
app.use(
    "/user",
    (req, res, next) => {
        //this function is called route handler
        console.log("handling route 1")
        // res.send("route handler 1") //if we remove res.send then we get an infinte loop because we havent used NEXT
        next()                        //adding next() makes sure that our request is forwarded to the next route handler if we havent responded back
        //    res.send("heolo")       //if we write here then we get error if the nexthandler is responding back
    },
    (req, res) => {
        console.log("handling route 2")
        res.send("route handler 2")
    })

app.listen(3000, () => {
    console.log("server up and running")
})