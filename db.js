const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect("mongodb://jahsminemma:Maamaa124.@cluster0-shard-00-00.moqw7.mongodb.net:27017,cluster0-shard-00-01.moqw7.mongodb.net:27017,cluster0-shard-00-02.moqw7.mongodb.net:27017/tiktok-clone?ssl=true&replicaSet=atlas-139n4z-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db"))
    