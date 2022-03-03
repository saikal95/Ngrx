const express = require('express');
const auth = require('../middleware/auth');
const TrackHistory = require("../models/TrackHIstory");


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

    console.log(trackHistory);
    await trackHistory.save();

    return res.send({message: 'TrackHistory is created', trackHistory})

  } catch (e) {
    next(e)
  }


});



module.exports = router;