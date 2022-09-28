const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const homeController = require("../controllers/home")


//Post Routes - simplified for now


router.post("/createPost", upload.single("file"), homeController.createPost);



router.delete("/deletePost", homeController.deletePost);

module.exports = router;
