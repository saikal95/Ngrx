const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const User = require("../models/User");


const router = express.Router();



router.post('/', async (req, res, next) => {
    try {
      const user = new User(req.body);
      user.generateToken();
      await user.save();

      return res.send(user);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).send(error);
      }

      return next(error);
    }
});






module.exports = router;