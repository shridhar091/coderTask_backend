const express = require('express')
const route = express.Router()
const userCtlr=require('../App/controllers/user-controller')

route.post('/api/user',userCtlr.create)

module.exports = route