const express = require('express');
const mongoose = require('mongoose');
const User = require("../models/User");
const path = require("path");
const config = require('../config');
const multer = require('multer');
const { nanoid } = require('nanoid');


const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});

const upload = multer({storage});



router.post('/', upload.single('avatar'),async (req, res, next) => {

  try {

      if (!req.body.email || !req.body.password ||!req.body.displayName) {
        return res.status(400).send({message: 'Email, password or displayName are required'});
      }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      avatar: null,
      displayName: req.body.displayName,

    };

    if (req.file) {
      userData.avatar = req.file.filename;
    }
    const user = new User(req.body);

    user.generateToken();

    await user.save();
    console.log(user);
    return res.send({message: 'New user is created with following id : !', user: {id: user.id}});

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }

    return next(error);
  }
});


router.post('/sessions', async (req, res) => {
  const user = await User.findOne({email: req.body.email});

  if (!user) {
    return res.status(400).send({error: 'Email not found'});
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(400).send({error: 'Password is wrong'});
  }

  user.generateToken();
  await user.save();

  return res.send({message: 'Username and password correct!', user: {token: user.token}});
});


module.exports = router;