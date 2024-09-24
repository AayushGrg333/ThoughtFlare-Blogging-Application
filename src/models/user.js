const {Schema,model} = require('mongoose');


// making structure
const UserSchema = new Schema({
    fullName : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL:{
        type: String,
        default: '../public/images/default.png'
    },
    role: {
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER",
    }
},{timestamps: true});

const User = model('user',UserSchema);

module.exports= User;




