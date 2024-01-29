const model = require("../models/index");
const User = model.User;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");



exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body; 
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email is already in use" });
    }
    
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign({ username, email }, "secret_key");
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      var token = jwt.sign({ email: user.email, username: user.username }, "secret_key");
      res.json({ success: true, message: "Correct Credentials", token });
    } else {
      res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};