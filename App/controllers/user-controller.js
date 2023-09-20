const User = require('../models/user')

const userCtlr = {}

userCtlr.create =  async(req,res)=>{
    try{
       const {body} = req
       const newUser = await User.create(body)
       res.json(newUser)
    }
    catch(e){
        res.json(e)
    }
}

module.exports = userCtlr