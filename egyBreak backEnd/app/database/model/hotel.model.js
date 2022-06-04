const mongoose = require("mongoose");
const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: [true, "name required"],
    },
    email: {
      type: String,
      trim: true,
      // required: [true, "name required"],
    },
    city: {
      type: String,
      trim: true,
      require: true,
    },
    phoneHotel: {
      type: String,
      trim: true,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
        type: String,
        trim: true,
      },
  },
  { timeStamps: true }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
