
const router = require('express').Router()
const db= require('../models')
const playlists = require('../models/playlists')

router.get('/', (req, res) => {
    db.Playlist.find()
    .then((playlists) => {
        res.render('playlists/index', {playlists})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

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

router.get('/new', (req,res) =>{
    res.render('playlists/new')
})

router.get('/:id', (req, res) => {
    db.Playlist.findById(req.params.id)
    .then(playlist => {
        res.render('playlists/show', {playlist})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    res.send('PUT /playlists/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /playlists/:id stub')
})

router.get('/:id/edit', (req,res) => {
    res.send('GET edit form stub')
})

// //NEW
// router.get('/new', (req, res) => {
//     res.render('playlists/new')
//   });

// router.get('/', (req, res) => {
//     res.render('playlists/playlist')
// })

// router.get('/edit', (req, res) => {
//     res.render('playlists/edit')
// })


// router.get('/project', (req, res) => {
//     res.render('places/project')
// });

module.exports = router