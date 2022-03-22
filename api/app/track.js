const express = require('express');
const Track = require("../models/Track");
const auth = require("../middleware/auth")
const permit = require("../middleware/permit")

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


router.post('/',auth, async (req, res, next) => {
  try {

    if (!req.body.title || !req.body.album || !req.body.duration) {
      return res.status(400).send({message: 'Insert requested data, it is not full'});
    }

    const trackData = {
      title: req.body.title,
      album: req.body.album,
      duration: req.body.duration,
      is_published: false,
    };


    const track = new Track(trackData);
    await track.save();
    console.log(track);

    return res.send(track);
  } catch (e) {
    next(e);
  }
});



module.exports = router;