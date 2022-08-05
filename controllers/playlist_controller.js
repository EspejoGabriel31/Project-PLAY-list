const router = require('express').Router()


// router.get('/' (req,res) => {

// })

router.get('/project', (req, res) => {
    res.render('places/project')
});

module.exports = router