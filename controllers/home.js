const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
    getIndex: async (req, res) => {
        try {
             const posts = await Post.find().sort({ createdAt: "desc" }).lean();
             res.render("index.ejs", { posts: posts });
           } catch (err) {
             console.log(err);
           }
      },
      
    createPost: async (req, res) => {
      try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
  
        await Post.create({
          title: req.body.title,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          description: req.body.description,
          // likes: 0,
          // user: req.user.id,
        });
        console.log("Post has been added!");
        res.redirect("/");
      } catch (err) {
        console.log(err);
      }
    },
  
    deletePost: async (req, res) => {
      try {
        // Find post by id
        let post = await Post.findById({ _id: req.params.id });
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(post.cloudinaryId);
        // Delete post from db
        await Post.remove({ _id: req.params.id });
        console.log("Deleted Post");
        res.redirect("/");
      } catch (err) {
        res.redirect("/");
      }
    },
  };
  