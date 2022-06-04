const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/image/");
  },
  filename: function (req, file, cb) {
    let myName = Date.now() + path.extname(file.originalname).toLowerCase();
    cb(null, myName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    if (path.extname(file.originalname).toLowerCase() != ".jpg" && ".jpeg")
      return cb(new Error("invalid ext"), null);
    cb(null, true);
  },
});

module.exports = upload;
