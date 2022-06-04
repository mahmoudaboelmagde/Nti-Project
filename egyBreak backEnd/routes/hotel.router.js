const router = require("express").Router();
const hotelControler = require("../app/controlers/hotel.controler");
const auth = require("../middlewere/auth.middlewere");
const authAdmin = require("../middlewere/authAdmin.middlewere");
const authHotel = require("../middlewere/authHotel.middlewere");

const upload = require("../middlewere/uploadfile.middlewere.js");

// router.post("/addhotel",auth, hotelControler.addhotel);
router.get("/allhotel",auth, hotelControler.AllHotel);
router.get("/singelhotel/:id",auth, hotelControler.singelHotel);

router.post(
    "/uploadimagehotel",auth,upload.single("image"),hotelControler.addhotel );


module.exports = router;
