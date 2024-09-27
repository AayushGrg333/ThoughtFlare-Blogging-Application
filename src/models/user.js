const { Schema, model } = require("mongoose");
const { error } = require("node:console");
const { createHmac, randomBytes } = require("node:crypto");
const { createTokenForUser } = require("../services/authentication");

// making structure
const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        salt: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        profileImageURL: {
            type: String,
            default: "/images/default.png",
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
    },
    { timestamps: true }
);

UserSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = randomBytes(16).toString(); //secret key
    //sha256 is a algorithm
    const hashedPassword = createHmac("sha256", salt)
        .update(user.password)
        .digest("hex");

        this.salt = salt;
        this.password = hashedPassword;

    next();
});

UserSchema.static('matchPasswordAndGenerateToken',async function(email,password){
    const user = await this.findOne({email});
    if(!user) throw new Error("user not found");

    const salt = user.salt;
    const userProvideHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    if(userProvideHash === user.password){
        const token = createTokenForUser(user);
        return token;
    }else{
        throw new Error("incorrect password");
    }
})

const User = model("user", UserSchema);

module.exports = User;
