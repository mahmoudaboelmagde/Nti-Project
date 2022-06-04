const mongoose = require("mongoose")
const BokkingSchema = mongoose.Schema({

    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    name:{
        type:String,
        trim:true,
        require:true
    },
    city:{
        type:String,
        trim:true,
        require:true
    },
    phoneHotel:{
        type:String,
        trim:true,
        require:true
    },
    image:{
        type:String,
        trim:true,
        require:true
    },
  
},{timeStamps:true})




const BookingUser = mongoose.model("userBook",BokkingSchema)
module.exports = BookingUser