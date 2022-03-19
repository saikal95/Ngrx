const express = require('express');
const auth = require('../middleware/auth');
const TrackHistory = require("../models/TrackHIstory");
const Artist = require("../models/Artist");
const Track = require("../models/Track");
const Album = require("../models/Album");


const router = express.Router();



router.post('/', auth, async (req, res, next) => {

  try {
    const dateTime = new Date().toString();

    const trackHistoryData = {
      user: req.user._id,
      track: req.body.track,
      dateTime: dateTime,
    };

    const trackHistory = new TrackHistory(trackHistoryData);

    await trackHistory.save();

    return res.send(trackHistory)

  } catch (e) {
    next(e)
  }


});


router.get("/", async (req, res, next) => {
  try {
    const query = {};

    if(req.query.track){
      query.track = req.query.track
    }

    const trackHistory = await TrackHistory.find(query).populate('track', 'title' );

    // const artist = await Album.find(query).populate('album', 'artist');

    return res.send(trackHistory);
  } catch(e) {
    next(e);
  }
});




module.exports = router;