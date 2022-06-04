const hotelModel = require("../database/model/hotel.model");

class hotel {
 
  static AllHotel = async (req, res) => {
    try {
      const hotelData = await hotelModel.find();
      res.status(200).send({
        apiStatus: true,
        data: hotelData,
        message: "data loaded",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error loading data",
      });
    }
  };
  static singelHotel = async (req, res) => {
    try {
      const hotelData = await hotelModel.findById(req.params.id);
          if (!hotelData)
      return res
        .status(404)
        .send({ apiStatus: false, data: {}, message: "user not found" });
        
      res
        .status(200)
        .send({ apiStatus: true, data: hotelData,img:hotelData.image, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error loading data",
      });
    }
  };


  static addhotel = async (req, res) => {
    try {
      req.body.image = req.file.path;
      req.body.image = req.body.image.replace("public\\",'')
      const hotelData = new hotelModel(req.body)
      await hotelData.save()
      console.log(hotelData );
      res.status(200).send({
        apiStatus: true,
        data: {hotelData,image:req.file},
        message: "data loaded",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error loading data",
      });
    }
  };
}

module.exports = hotel;
