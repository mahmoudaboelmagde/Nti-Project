const BookingUser = require("../database/model/booking.model")
const hotel = require("../database/model/hotel.model")
class Booking {

    static addBooking = async (req,res)=>{

        try{
            const BookingData = new BookingUser({
                ...req.body,
                userID:req.user._id
            })
            await BookingData.save()
            res.status(200).send({
                apiStatus:true,
                data:{BookingData,userData:req.user},
                message:"booked success"
            })
        }
        catch(e){
                res.status(500).send({
                    apiStatus:false,
                    data:e.message,
                    message:"you didnt book"
                })
        }
    }
    static AllBooking = async (req,res)=>{

        try{
            const BookingData = await BookingUser.find()
            res.status(200).send({
                apiStatus:true,
                data:BookingData,
                message:"data loaded"
            })
        }
        catch(e){
                res.status(500).send({
                    apiStatus:false,
                    data:e.message,
                    message:"error loading data"
                })
        }
    }
    static BookingWithVirtual = async (req,res)=>{

        try{
             await req.user.populate("myBooking")
            res.status(200).send({
                apiStatus:true,
                data:{booking:req.user.myBooking,id:req.user.myBooking._id},
                // data:{booking:req.user.myBooking,user:req.user},
                message:"data loaded"
            })
        }
        catch(e){
                res.status(500).send({
                    apiStatus:false,
                    data:e.message,
                    message:"error loading data"
                })
        }
    }
    static canselBooking = async (req,res)=>{

        try{
             const user = await BookingUser.findByIdAndDelete(req.params.id)
             await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data:{},
                message:"data loaded"
            })
        }
        catch(e){
                res.status(500).send({
                    apiStatus:false,
                    data:e.message,
                    message:"error loading data"
                })
        }
    }
    static mybooks = async(req,res)=>{
        try{
            const posts = await BookingUser.find({userID: req.user._id})
            res.status(200).send({
                apiStatus:true,
                data:{books, user:req.user},
                message:"data loaded"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }

}


module.exports =  Booking