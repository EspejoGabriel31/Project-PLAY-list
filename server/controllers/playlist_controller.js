const router = require('express').Router()
const playlists = require('../models/playlists')
const db= require("../models")

//Send data to client
router.get('/test', (req,res) => { //Sends data to Client through test route
    // res.send(playlists)
})

//CREATE
router.post('/new', (req,res) => {
    console.log("something", req.body)
    db.Playlist.create(req.body)
    .then(() => {
        console.log("workingg")
    })
    // console.log(req)
    res.send("worked")
})

/*
router.post('/', (req,res) => {
    db.Playlist.create(req.body)
    .then(() => {
        res.redirect('/playlists')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
*/

module.exports = router
