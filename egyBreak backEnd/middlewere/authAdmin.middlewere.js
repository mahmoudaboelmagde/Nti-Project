const userModel = require("../app/database/model/user.model");
const jwt = require("jsonwebtoken");

const authAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "break");
console.log(decoded);
    const user = await userModel.findOne({ _id: decoded._id, "tokens.token": token });
    const admin = "admin";
    if (!user) throw new Error("unAuthorization");
    if (user.role != "admin") throw new Error("not admin");
    


    req.user = user;
    req.tokens= token;
    next();
  } catch (e) {
    res.status(500).send({
      apiStatus: false,
      data: e.message,
      message: "unauthorized",
    });
  }
};


module.exports = authAdmin;
