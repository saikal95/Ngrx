const mongoose = require('mongoose');
const config = require("./config");
const Artist = require("./models/Artist");
const Album = require("./models/Album");

const run = async () => {
  await mongoose.connect(config.mongo.db, config.mongo.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [ MarylinManson, Iggy, Ozzie] = await Artist.create({
    title: 'MarylinManson',
    information: 'American rock singer',
    image: 'marm.jpg',
  }, {
    title: 'Iggy',
    information: 'Grammy Award for Best Recording of the Year 2021',
    image: 'iggyAz.jpeg',
  }, {
    title: 'Ozzie',
    information: 'British rock singer',
    image: 'ozOs.jpg',
  });

  await Album.create({
    title: 'Antichrist Superstar',
    artist: MarylinManson,
    year: 1996,
    image: 'mm.jpg',
  },{
    title: 'Digital Distortion',
    artist: Iggy,
    year: 2017,
    image: 'iggy.jpg',
  }, {
    title: 'Crazy Train',
    artist: Ozzie,
    year: 1986,
    image: 'ozzie.jpg',
  });

  await mongoose.connection.close();
};

run().catch(e => console.error(e));