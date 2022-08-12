const router = require('express').Router()
const playlists = require('../models/playlists')
const db= require("../models")

//SHOW
router.get('/test', (req,res) => { //Sends data to Client through test route
    db.Playlist.find()
    .then((playlists) => {
        console.log("sending")
        res.send(playlists)
    })
})

//CREATE
router.post('/new', (req,res) => {
    console.log("something", req.body)
    db.Playlist.create(req.body)        //Create database entry based on data sent from New.js from client
    .then(() => {                       
        console.log("workingg")
    })
    // console.log(req)
    res.send("worked")
})


module.exports = router
