const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MongoDB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db"))
    