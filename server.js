require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT) //SET PORT TO 3000