const model= require('../models/index')
const User = model.User;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

exports.signup = async (req, res)=>{
    const { username, email, password} = req.query;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = new User({
        username, 
        email,
        password: hashedPassword,
    })
    user.save()
    res.json({ success: true, message: req.query });
}

exports.login = async(req, res)=>{
    
}
