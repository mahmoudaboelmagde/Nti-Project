const router = require("express").Router();
const userModel = require("../app/controlers/user.controles");
const frontUserModel = require("../app/controlers/front.controles");
const authHotel = require("../middlewere/authHotel.middlewere");
const authAdmin = require("../middlewere/authAdmin.middlewere");
router.get("/", frontUserModel.showAll);
router.get("/addData", frontUserModel.add);
router.post("/addData", frontUserModel.addLogic);
router.get("/show/:id", frontUserModel.singl);


//add hotel
router.get("/allhotel/:pageNum/:limit", frontUserModel.showAllHotel);
router.get("/addhotel", frontUserModel.addHotel);
router.post("/addhotel", frontUserModel.addHotelLogic);
router.get("/singelHotel/:id", frontUserModel.singlHotel);
module.exports = router;
