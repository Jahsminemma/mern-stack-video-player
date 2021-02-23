const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    videoUrl : {
        type : String,
        required : true
    },
    shares : {
        type: Number,
        required: true
    },
    messages : {
        type: Number,
        required: true
    },
    likes : {
        type: Number,
        required: true
    },
    channels : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    song : {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("VideoDetails", videoSchema)