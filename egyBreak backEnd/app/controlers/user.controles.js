const userModel = require("../database/model/user.model");
const path = require("path");
const fs = require("fs");
class User {
  static register = async (req, res) => {
    try {
      const user = new userModel(req.body);
      await user.save();
      res.status(200).send({
        apiStatus: true,
        data: user,
        message: "succsess",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "user adding problem",
      });
    }
  };

  static getAllUsers = async (req, res) => {
    try {
      const user = await userModel.find();
      res.status(200).send({
        apiStatus: true,
        data: user,
        message: "get all user Success",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in fetching",
      });
    }
  };

  static login = async (req, res) => {
    try {
      const user = await userModel.loginUser(req.body.email, req.body.password);
      const token = await user.generetToken();
      res.status(200).send({
        apiStatus: true,
        data: { user, token },
        message: "login user Success",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "login user field",
      });
    }
  };
  static singleUser = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user)
        return res
          .status(404)
          .send({ apiStatus: false, data: {}, message: "user not found" });

      res
        .status(200)
        .send({ apiStatus: true, data: user, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "login user field",
      });
    }
  };

  static logOut = async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((singleToken) => {
        return singleToken.token != req.token;
      });

      await req.user.save();
      res.status(200).send({
        apiStatus: true,
        message: "logged out",
        data: {},
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error on logout",
      });
    }
  };
  static logOutAll = async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res.status(200).send({
        apiStatus: true,
        data: {},
        message: "logged out",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "no logged out",
      });
    }
  };

  static uploadImage = async (req, res) => {
    try {
      req.user.image = req.file.path;
      req.user.image = req.user.image.replace("public\\", "");
      // res.send(req.user.image);
      await req.user.save();
      res.send({
        apiStatus: true,
        data: req.user,
        message: "updated",
      });
    } catch (e) {}
  };

  

  static editPassword = async (req, res) => {
    try {
      const isValid = await req.user.checkPassword(req.body.password);
      if (!isValid) throw new Error("invalid passwrod");
      req.user.password = req.body.newPassword;
      await req.user.save();
      res.status(200).send({
        apiStatus: true,
        data: "updated",
        message: "updated password",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "invalid password",
      });
    }
  };

  static editUser = async (req, res) => {
    try {
      const isValidEdit = ["password", "__v", "tokens", "updatedAt"];
      for (const property in req.body) {
        if (!isValidEdit.includes(property))
          req.user[property] = req.body[property];
      }
      req.user.save();
      res.status(200).send({
        apiStatus: true,
        data: req.user,
        message: "succsess",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "invalid data",
      });
    }
  };
}

module.exports = User;
