require('dotenv').config()


const mongoose = require('mongoose')

 const playlistSchema = new mongoose.Schema({
   name: { type: String, required: true },
   games: { type: [String] }
   //  image: { type: String },
 })



 module.exports = mongoose.model('Playlist', playlistSchema);
 