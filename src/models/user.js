const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     firstName : {
        type:String,
        required : true,
        minLength : 3,
        maxLength : 10
     },
     lastName : {
        type : String
     },
     emailId : {
        type: String,
        required: true,
        unique: true,
        lowercase : true,   //converts the stirng into lower case 
        trim : true // removes extra white spaces from the string
     }, 
     password : {
        type : String,
        required : true
     },
     age:{
        type : Number
     },
     gender:{
        type : String,
        validate(value){
         if(value != "male" && value != "female" && value != "others"){   //custom validation on user schema
            throw new Error("gender not valide")
       }
        }
     },
     about:{
      type : String,
      default : "This is default about section"
     },
     photoUrl : {
      type : String,
      default : "data:image/png;base64,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"
     },
     Skills : {
      type : [String]
     },
    

}, {
      timestamps: true
     })

const User = mongoose.model("User",userSchema)    //(name of model , schema)

module.exports = User