const { json } = require("body-parser")
const express = require("express")
const router = express.Router()

const Video = require("../models/Video")


router.get("/", async (req, res) => {
    try {
        const videos = await Video.find((err, video) => {
            if (err) return res.status(500).json({ success: false, error : err })
            return res.status(200).json({success:true, data : video})
        })
        return videos
    } catch (err) {
        res.json(err)
    }
})


router.post("/", async (req, res) => {
    const savedVideo = new Video({
         videoUrl : req.body.videoUrl,
         shares : req.body.shares,
         messages: req.body.messages,
         likes : req.body.likes,
         channels : req.body.channels,
         description : req.body.description,
         song : req.body.song
    })
    
    try {
        const video = await savedVideo.save((err, created) => {
            if(err) return res.status(500).json({ success: false, error: err })
              return res.status(201).json({success:true, data:created})
        })
        return video
    } catch (err) {
        res.json(err)
    }
})

router.get("/:id", async (req, res) => {
      let videoId = { _id : req.params.id }
    try {
        const specifiedVideo = await Video.findById(videoId, (err, video) => {
            if (err) return res.status(500).json({ success: false, error: err })
            return res.status(200).json({success:true, data : video})
        })
        return specifiedVideo
    } catch (err) {
        res.json(err)
    }
})

router.put("/:id", (req, res) => {
    try {
        const updatedVideo = Video.updateOne({ _id: req.params.id },
        {
            videoUrl: req.body.videoUrl,
            shares : req.body.shares,
            messages: req.body.messages,
            likes : req.body.likes,
            channels : req.body.channels,
            description : req.body.description,
            song: req.body.song
            }, {
            multi: true
        }, (err, video) => {
            if (err) return res.status(500).json({ success: false, error: err })
            return res.status(200).json({ success: true, data: video})
        })
        return updatedVideo
    } catch (err) {
        res.json(err)
    }
})


router.delete("/:id", (req, res) => {
    try {
        const deletedVideo = Video.deleteOne({ _id: req.params.id }, (err, video) => {
            if (err) return res.status(500).json({ success: false, error: err })
            return res.status(200).json({ success: true, data: video})
        })
        return deletedVideo
    } catch (err) {
        res.json(err)
    }
})



module.exports = router