const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/new')
    res.render('places/index')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
module.exports = router
