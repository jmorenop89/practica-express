const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/',controller.All)
router.post('/create',controller.Create)

module.exports = router