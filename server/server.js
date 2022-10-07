const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client','build')))
}

app.use(express.static(path.resolve(__dirname, '../client/build')))

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', require('./controllers/playlist_controller')) 

//Handle GET requrests to /api route
app.get('/api', (req, res) => {
    res.json({
        message: "All systems online..."
    })
})



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

