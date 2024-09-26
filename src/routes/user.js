const express = require("express");
const User = require('../models/user');

// creating router 
const router = express.Router()

router.get('/signin',(req,res)=>{
    return res.render("signin");
});

router.get('/signup',(req,res)=>{
    return res.render("signup");
});

router.post('/signup',async (req,res)=> {
    const {fullName, email ,password} = req.body;
    console.log(req.body)
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/")
})





module.exports = router;