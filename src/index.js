require('dotenv').config();
const express = require("express")
const path = require("path")

const app = express();
const PORT  = process.env.PORT;

//setting view engine
app.set("view engine",'ejs');
app.set("views",path.resolve(__dirname,"views"));

//setting path
app.get('/', (req,res)=>{
    res.render('home');
})

//starting server
app.listen(PORT, ()=> console.log(`Server has been started Port:${PORT}`))