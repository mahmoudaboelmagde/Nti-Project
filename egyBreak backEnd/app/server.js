const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("dotenv").config();
require("../app/database/connect");
const userRouter = require("../routes/user.routes");
const frontRouter = require("../routes/front.routs");
const bookingRouter = require("../routes/booking.routes");
const hotelRouter = require("../routes/hotel.router");
const cors = require("cors")
app.use(cors())
hbs.registerPartials(path.join(__dirname, "./frontEnd/layout"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./frontEnd/views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use(frontRouter);
app.use("/book",bookingRouter);
app.use("/hotel",hotelRouter);

app.all("*", (req, res) => {
  res.status(404).send({ error: "invalid url segment", apiStautus: false });
});

module.exports = app;
