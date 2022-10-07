require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { //ADD A MONGO_URI TO YOUR .env FILE TO MAKE WORK
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Playlist = require('./playlists')