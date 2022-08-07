// require('dotenv').config()

/*
const mongoose = require('mongoose')

 const playlistSchema = new mongoose.Schema({
   name: {type: String, required: true},
   image: { type: String, default: 'https://as1.ftcdn.net/v2/jpg/01/31/65/76/1000_F_131657622_S5YkNeyUWFuiQfI64SHdQk7myctG8JgQ.jpg' },
   game: { type: [String] }
 })

 playlistSchema.methods.newPlaylist = function() {
   return `${this.name}`
 };

 module.exports = mongoose.model('Playlist', playlistSchema);
 */

 module.exports = [{
  name:'Test Playlist 0',
  games: ['Pokemon Emerald', 'Pokemon Platinum', 'Pokemon Red Rescue Team']
 }, {
  name: 'Test Playlist 1',
  games: ['Halo 3', 'Fallout New Vegas', 'Elder Scrolls IV Oblivion'] 
 }]