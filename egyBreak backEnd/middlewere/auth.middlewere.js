const userModel = require("../app/database/model/user.model")
const jwt = require("jsonwebtoken")


const auth = async( req, res, next ) =>{
    try{
        const token = req.header("Authorization").replace("bearer ", "") 
        const decodedtoken = jwt.verify(token, "break")
        const user = await userModel.findOne({
            _id: decodedtoken._id, 
            'tokens.token': token
        })
        if(!user) throw new Error("user not found")
        // if(!user.status) throw new Error("please activate your account")
        req.user = user
        req.token = token
   
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"unauthorized"
        })
    }
}





module.exports = auth