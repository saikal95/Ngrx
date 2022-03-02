const express = require('express');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const Track = require("../models/Track");
const Album = require("../models/Album");

const router = express.Router();



router.get('/', async (req, res, next) => {
  try {

    // console.log(req.query);
    // if (req.query.artist) {
    //   query.artist = req.query.artist;


    return res.send();
  } catch (e) {
    next(e);
  }
});


router.post('/', upload.single('image'), async (req, res, next) => {
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