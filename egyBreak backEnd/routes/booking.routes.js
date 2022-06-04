const router = require("express").Router();
const BookingControler = require("../app/controlers/booking.controlers");
const auth = require("../middlewere/auth.middlewere");
const authAdmin = require("../middlewere/authAdmin.middlewere");

router.post("/addbook", auth, BookingControler.addBooking);
router.get("/allbook", auth, authAdmin, BookingControler.AllBooking);
router.get("/mybooking", auth, BookingControler.BookingWithVirtual);
// router.get("/mybooking", auth, BookingControler.mybooks);

router.delete("/cancelbooking/:id", auth, BookingControler.canselBooking);

module.exports = router;
