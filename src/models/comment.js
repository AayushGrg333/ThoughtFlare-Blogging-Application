const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    content:{
        type: String,
        required: true
    },
    blogId:{
        type: Schema.Types.ObjectId,
        ref: "blog",
    },
},{timestamps: true});

const Comment = model("comment",commentSchema)


module.exports = Comment;