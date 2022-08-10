require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { //ADD A MONGO_URI TO YOUR .env FILE TO MAKE WORK
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Playlist = require('./playlists')