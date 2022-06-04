const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//userSchame
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name required"],
    },
    role: {
      type: String,
      enum: ["client", "admin", "company", "tourguide"],
      // required:[true,"chose role"],
      default: "client",
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      validator(value) {
        if (!validator.isEmail(value)) throw new Error("email is Existe");
      },
      required: [true, "email required"],
    },
    age: {
      type: Number,
      required: [true, "age required"],
    },
    phone: {
      type: Number,
      // validator(value){
      //     if(!validator.isMobilePhone(value,"ar-EG"))throw new Error("invalid phone Number")
      // }
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password required"],
    },
    gender: {
      type: String,
      trim: true,
      // required: [true, "required gender"],
      enum: ["male", "female"],
    },
    status: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          trim: true,
        },
      },
    ],
    adresses: [
      {
        address: {
          addrDetails: {
            type: String,
            trim: true,
            // required: [true, "required name"],
          },
          addrBuildingNum: {
            type: Number,
            min: 1,
            max: 1000,
          },
        },
      },
    ],
  },
  { timestamps: true }
);


// virtual Booking Model
userSchema.virtual("myBooking",{
  ref:"userBook",
  localField:"_id",
  foreignField:"userID"
})

// userSchema.virtual("hotelBook",{
//     ref:"hotel",
//     localField:"_id",
//     foreignField:"hotelID"
// })

//delete password from data
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  delete user.__v;
  return user;
};
//hash pasword
userSchema.pre("save", async function () {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcrypt.hash(user.password, 10);
});
// login user
userSchema.statics.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user.email) throw new Error("invalid Email");
  const isValid = await user.checkPassword(password);
  if (!isValid) throw new Error("invalid Password");
  return user;
};

//compere password
userSchema.methods.checkPassword = async function (currentPassword) {
  const user = this;
  const isValid = await bcrypt.compare(currentPassword, user.password);
  return isValid;
};

//generatToken
userSchema.methods.generetToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id }, "break");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
