const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const videoRoute = require("./route/video")
const db= require("./db")


const app = express()

//middleware
app.use(cors())
app.use(bodyParser.json())
app.use("/api/v1/videos", videoRoute)
app.use('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
        res.setHeader("Access-Control-Allow-Headers", "*"),
        next()
})

app.get("/", (req, res) => {
    res.send("server running")
})



//app port
    app.listen(process.env.PORT || 3001, () => console.log("server running on port 3001"))

    module.exports = app