const express = require('express');
const Artist = require('../models/Artist');
const auth = require("../middleware/auth")
const permit = require("../middleware/permit")
const Album = require("../models/Album");
const multer = require("multer");
const config = require("../config");
const {nanoid} = require("nanoid");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});


const upload = multer({storage});

router.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.find();
    return res.send(artists);
  } catch(e) {
    next(e);
  }
});

router.post("/", auth, upload.single('image'),async (req, res, next) => {

  try {
    if (!req.body.title) {
      return res.status(400).send({message: 'Body should not be empty'});
    }

    const artistData = {
      title: req.body.title,
      image: null,
      information : req.body.information,
      is_published: false,
    };

    if (req.file) {
      artistData.image = req.file.filename;
    }

    const artist = new Artist(artistData);

    await artist.save();
    console.log(artist);
    return res.send(artist);
  } catch (e) {
    next(e);
  }
});



module.exports = router;