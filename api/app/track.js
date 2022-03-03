const express = require('express');
const Track = require("../models/Track");

const router = express.Router();



router.get('/', async (req, res, next) => {
  try {
    const query = {};

    if (req.query.album) {
      query.album = req.query.album;
    }

    const tracks = await Track.find(query).populate("album", "title");

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