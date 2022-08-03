const router = require('express').Router()

//NEW
router.get('/new', (req, res) => {
    res.render('playlists/new')
  });

router.get('/', (req, res) => {
    res.render('playlists/playlist')
})

module.exports = router