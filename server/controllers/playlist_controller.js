const router = require('express').Router()
const playlists = require('../models/playlists')

//Send data to client
router.get('/test', (req,res) => { //Sends data to Client through test route
    res.send(playlists)
})

//New playlist from client
router.post('/new', (req,res) => {
    console.log(req.body)
})


module.exports = router
