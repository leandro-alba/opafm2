const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");


//Main Routes - simplified for now
router.get("/", homeController.getIndex);


module.exports = router;
