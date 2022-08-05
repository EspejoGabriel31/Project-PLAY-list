const router = require('express').Router()

//NEW
router.get('/new', (req, res) => {
    res.render('playlists/new')
  });

router.get('/', (req, res) => {
    res.render('playlists/playlist')
})


// })

router.get('/project', (req, res) => {
    res.render('places/project')
});

module.exports = router