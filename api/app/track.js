const express = require('express');
const Track = require("../models/Track");
const Album = require("../models/Album");

const router = express.Router();



router.get('/', async (req, res, next) => {
  try {
    // const query = {};
    // const sort = {};
    //
    // const tracks = await Track.find(query).sort(sort).populate("album", " year");
    //  req.query.params = ???

    const tracks = await Track.find();

    console.log(tracks);
    return res.send(tracks);
  } catch (e) {
    next(e);
  }
});


router.post('/', async (req, res, next) => {
  try {
    const trackData = {
      title: req.body.title,
      album: req.body.album,
      duration: req.body.duration,
    };

    if (!req.body.title || !req.body.album || !req.body.duration) {
      return res.status(400).send({message: 'Insert requested data, it is not full'});
    }
    const track = new Track(trackData);
    await track.save();

    return res.send({message: 'Created new Track', id: track._id});
  } catch (e) {
    next(e);
  }
});



module.exports = router;