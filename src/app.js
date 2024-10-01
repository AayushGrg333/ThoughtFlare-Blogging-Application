require('dotenv').config();
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser')
const {checkForAuthenticaitonCookie} = require("./middlewares/authentication")

// router register
const mongoConnect =  require('./config/db')
const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")
const Blog = require('./models/blog')

const app = express();
const PORT  = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(checkForAuthenticaitonCookie('token'))
app.use(express.static(path.resolve(__dirname, "../public")));

//connecting with mongodb
mongoConnect()

//setting view engine
app.set("view engine",'ejs');
app.set("views",path.resolve(__dirname,"views"));

//setting path
app.get('/', async (req,res)=>{
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.render('home',{
        user:req.user,
        blogs: allBlogs
    });
})

app.use("/user",userRoute);
app.use("/blog",blogRoute);

//starting server
app.listen(PORT, ()=> console.log(`Server has been started Port:${PORT}`))