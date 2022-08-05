// EXPRESS & DEPENDECIES
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// app.use(methodOverride('_method'))

//Controllers & Routes
<<<<<<< HEAD
app.use('/places', require('.//controllers/playlist_controller'))

// app.use('/playlists', require('./controllers/playlist_controller'))
=======
app.use('/playlists', require('./controllers/playlist_controller'))
>>>>>>> 72a4bc4c6c304c5c14f4ed658a22c72519064e40


app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('404')
})




// PORT 
app.listen(process.env.PORT) //SET PORT TO 3000