const express = require('express');
const multer = require('multer');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const Album = require("../models/Album");
const Artist = require("../models/Artist");

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

router.get('/', async (req, res, next) => {
  try {
    const query = {};
    const sort = {};

    console.log(req.query);
    if (req.query.artist) {
      query.artist = req.query.artist;
    }

    const albums = await Album.find(query).sort(sort).populate("artist", "title information");


    return res.send(albums);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const sort = {};
    const album = await Album.findById(req.params.id).sort(sort).populate("artist", "title information");


    if (!album) {
      return res.status(404).send({message: 'Not found'});
    }

    return res.send(album);
  } catch (e) {
    next(e);
  }
});

router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.artist) {
      return res.status(400).send({message: 'Post is not possible now, you should provide title and artist at least'});
    }

    const albumData = {
      title: req.body.title,
      artist: req.body.artist,
      year: req.body.year,
      image: null,
    };

    if (req.file) {
      albumData.image = req.file.filename;
    }

    const album = new Album(albumData);

    await album.save();

    return res.send({message: 'Created new Album', id: album._id});
  } catch (e) {
    next(e);
  }
});



module.exports = router;