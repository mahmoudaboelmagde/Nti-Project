const UserModel = require("../database/model/user.model");
const HotelModel =require("../database/model/hotel.model")

class front {
  //add user

  static add = (req, res) => {
    res.render("addData", {
      pageTitle: "add User Data",
    });
  };

  static addLogic = async (req, res) => {
    try {
      const user = new UserModel(req.body);
      await user.save();
      res.redirect("/");
    } catch (e) {
      res.send(e);
    }
  };

  static showAll = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.render("showall", {
        pageTitle: "All User Data",
        users,
        hasUsers: users.length,
      });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };
  static singl = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.render("singel", { user, pageTitle: "Single User Data" });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };



///add hotel
  static addHotel = (req, res) => {
    res.render("addhotel", {
      pageTitle: "add hotel Data",
    });
  };

  static addHotelLogic = async (req, res) => {
    try {
      const user = new HotelModel(req.body);
      await user.save();
      res.redirect("allHotel");
    } catch (e) {
      res.send(e);
    }
  };

  static showAllHotel = async (req, res) => {

    const limitCount  = Number(req.params.limitCount)
    const skipCount  = Number(req.params.skip)*limitCount

    try {
      const hotel = await HotelModel.find().skip(skipCount).limit(limitCount)
      res.render("allHotel", {
        pageTitle: "All hotel Data",
        hotel,
        hasUsers: hotel.length,
      });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };


  static singlHotel = async (req, res) => {
    try {
      const user = await HotelModel.findById(req.params.id);
      res.render("singelHotel", { user, pageTitle: "Single hotel Data" });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };



  // static uploadImage = async (req, res) => {
  //   try {
    
  //     req.user.image = req.file.path
  //     await req.user.save();
  //     res.send({
  //       apiStatus: true,
  //       data: req.user,
  //       message: "updated",
  //     });
  //   } catch (e) {}
  // };
}

module.exports = front;
