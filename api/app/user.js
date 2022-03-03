const express = require('express');
const mongoose = require('mongoose');
const User = require("../models/User");


const router = express.Router();


router.post('/', async (req, res, next) => {
  try {
    const user = new User(req.body);
    user.generateToken();
    await user.save();
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