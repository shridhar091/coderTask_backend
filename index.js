const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/Database')
const route = require('./config/route')
const port = '3091'
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(port,(req,res)=>{
    console.log('server running on port ',port);
})
configureDB()
