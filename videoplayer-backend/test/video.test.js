const expect = require("chai").expect
const request = require("supertest")
const server = require("../app")
const mongoose = require("mongoose")
require("dotenv").config()
const Video = require("../models/Video")

const app = request.agent(server)

//before("drop all db data before testing", (done) => {
  //  mongoose.connect(process.env.DB_CONNECTION, () => {
  //      mongoose.connection.db.dropDatabase(() => {
  //          done()
   //     })
   // })
//})


describe("POST request", () => {
    describe("creating a video", () => {
        it("success should return true", () => {
            app.post("/api/v1/videos").send({
            videoUrl:"https://v77.tiktokcdn.com/3b69bb6da59880df9afe05a41f16ecdd/6034d08e/video/tos/alisg/tos-alisg-pve-0037c001/4b919625d36e485a9043183d2e7186f3/?a=1233&br=762&bt=381&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102230353080101901861420B00DBF2&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M2p0M3A0ZXlsMzMzZjczM0ApNDVmN2k7OTtpN2g8OmZnZmdhNWoxXjNgNGJgLS0wMTRzcy9iYjUzYTUyXjIxLmAtYGI6Yw%3D%3D&vl=&vr=",
            shares : "132",
            messages : "233",
            likes: "232",
            channels:"jahsminemma",
            description : "love lori iro",
            song: "awesome "
                
            }).end((err, res) => {
             expect(res.body.success).to.equal(true)
             expect(res.body).to.a("object")
            })
        })
    })
})
describe("Get request", () => {
    describe("get videos", () => {
        it("success should return true", () => {
            app.get("/api/v1/videos").end((err, res) => {
             expect(res.body.success).to.equal(true)
             expect(res.body).to.a("object")
            })
        })
    })
})

describe("PUT request", () => {
    let video = null
    let id = "60348511a2e74016d48361de"
    before("finding video by id", async () => {
        video = await Video.findOne({_id : id})
    })
    describe("editing the video", async () => {
        let result = null
        let updatedVideo = {
             videoUrl : "https://v16m.tiktokcdn.com/7f42226801edf2eea7a266bc7528a8bd/603449ef/video/tos/useast2a/tos-useast2a-ve-0068c003/08e0d8a7f06e49948f8c7824c8683459/?a=1233&br=4916&bt=2458&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102221818330101902182275130FE18&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=Mzlldzd5b2U8MzMzaTczM0ApaTNlZjw2PGU8NztmNDc7aGdmZDJkXnJjL21gLS1fMTZzcy0uNC9eMS9fLTYyL2AyYl86Yw%3D%3D&vl=&vr=",
             shares : "200",
             messages: "123",
             likes : "430",
             channels : "jahsminemma",
             description : "Love this remix",
             song: "Teni - Case (Remix) - Stevenz NavzXidē FJ"
        }
        before(async () => {
            result = await app.put(`/api/v1/videos/${id}`)
                .send(updatedVideo)
        })
        it("body should be object ", (done) => {
            expect(result.body).to.a("object")
            done()
        })
         it("success should return true", (done) => {
             expect(result.body.success).to.equal(true)
            done()
        })
    })
})

describe(" Delete request", () => {
    let video = null
    let id = "60348511a2e74016d48361de"
    before("finding video by id", async () => {
        video = await Video.findOne({_id : id})
    })
    describe("deleting the video", async () => {
        let result = null
        before(async () => {
            result = await app.delete(`/api/v1/videos/${id}`)
        })
        it("body should be object ", (done) => {
            expect(result.body).to.a("object")
            done()
        })
         it("success should return true", (done) => {
             expect(result.body.success).to.equal(true)
            done()
        })
    })
})