const express = require('express');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const User = require("../models/User");


const router = express.Router();



router.post('/', async (req, res, next) => {
  try {
    // if (!req.body.title || !req.body.artist) {
    //   return res.status(400).send({message: 'Post is not possible now, you should provide title and artist at least'});
    // }

    // const albumData = {

    // };



    // await album.save();

    return res.send({message: 'Created new Album', id: album._id});

  } catch (e) {
    next(e);
  }
});



module.exports = router;