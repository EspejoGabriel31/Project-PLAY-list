// EXPRESS & DEPENDECIES
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// // Mongoose
// const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(
//   MONGO_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log(`connected to mongo: ${MONGO_URI}`);
//   }
// );

// app.use(methodOverride('_method'))

//Controllers & Routes

// app.use('/places', require('.//controllers/playlist_controller'))

// app.use('/playlists', require('./controllers/playlist_controller'))

app.use('/playlists', require('./controllers/playlist_controller'))




app.get('/aboutUs', (req,res) =>{
    res.render('aboutUs')
})

app.get('/project', (req,res) => {
    res.render('project')
})

app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('404')
})




// PORT 
app.listen(process.env.PORT) //SET PORT TO 3000