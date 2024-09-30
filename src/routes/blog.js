const express = require("express");
const multer = require("multer")
const path = require("path");

const Blog = require('../models/blog');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname,"../../public/uploads"));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({storage: storage}) 
const router = express.Router();

router.get("/add-new",(req,res)=>{
    return res.render('addBlog',{
        user: req.user
    })
});

router.get(`/:id`,async (req,res)=>{
    const blogId = req.params.id;
    const blogPost = await Blog.findById(blogId)
    return res.render('blog.ejs',{
        user: req.user,
        blog: blogPost,
    });
})

router.post("/add-new",upload.single('coverImage'), async (req,res)=>{
    const {title,body} = req.body;
    const blog = await Blog.create({
        title: title,
        body: body,
        coverImageURL: `/uploads/${req.file.filename}`,
        createdBy: req.user._id,
    });
    return res.redirect(`/blog/${blog._id}`);

});


module.exports = router;
