const express = require('express');
const auth = require('../middleware/auth');
const TrackHistory = require("../models/TrackHIstory");
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


router.get("/", auth, async (req, res, next) => {
  try {

    let albumId = null ;
    let trackArray = [];
    let trackId = null;
    const query = {};
      query.user = req.user._id;

    const trackHistory = await TrackHistory.find(query).populate('track', 'title');

    for(let val of trackHistory){
      trackId= val['track']['_id'];
      const track = await Track.findById(trackId).populate('album', '_id');
        albumId = track['album']['_id'];
     const artistName = await Album.findById(albumId).populate('artist', '_id title');
     const newName = {track: track['title'], artist: artistName['artist']['title'], dateTime: trackHistory[1]['dateTime']};
     trackArray.push(newName);
    }
    trackArray.push(trackHistory);
    return res.send(trackArray);
  } catch(e) {
    next(e);
  }
});




module.exports = router;