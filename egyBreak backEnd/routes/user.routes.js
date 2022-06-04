const router = require("express").Router();
const userControler = require("../app/controlers/user.controles.js");
const authAdmin = require("../middlewere/authAdmin.middlewere");
const auth = require("../middlewere/auth.middlewere");
const upload = require("../middlewere/uploadfile.middlewere.js");

//add new user
router.post("/register", userControler.register);
router.post("/login", userControler.login);

router.get("/alluser",authAdmin, userControler.getAllUsers);
router.get("/singel/:id", auth, userControler.singleUser);

router.post("/logout", auth, userControler.logOut);
router.post("/logoutall", auth, userControler.logOutAll);

//upload image
router.patch(
  "/uploadimage",
  auth,
  upload.single("image"),
  userControler.uploadImage
);

//editpassword
router.patch("/editPass", auth, userControler.editPassword);
//editUser
router.patch("/editUser", auth, userControler.editUser);

module.exports = router;
