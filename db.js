const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect("mongodb://127.0.0.1:27017/tiktok-clone",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db"))
    .catch(err => console.error(err))
    