const mongoose = require('mongoose');
const config = require("./config");
const Artist = require("./models/Artist");
const Album = require("./models/Album");
const Track = require("./models/Track");
const User = require("./models/User");
const { nanoid } = require('nanoid');

const run = async () => {
  await mongoose.connect(config.mongo.db, config.mongo.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  await User.create({
    email:'sircle98@mail.ru',
    password: '1234789',
    avatar: 'user.png',
    displayName: 'Saiko',
    token: nanoid(),
    role: 'user',
  }, {
    email:'admin@shop.com',
    password: '12347810',
    avatar: 'admin.jpeg',
    displayName: 'John-admn',
    token: nanoid(),
    role:'admin',
  })

  const [MarylinManson, Iggy, Ozzie] = await Artist.create({
    title: 'MarylinManson',
    information: 'American rock singer',
    image: 'marm.jpg',
    is_published: false,
  }, {
    title: 'Iggy',
    information: 'Grammy Award for Best Recording of the Year 2021',
    image: 'iggyAz.jpeg',
    is_published: true,
  }, {
    title: 'Ozzie',
    information: 'British rock singer',
    image: 'ozOs.jpg',
    is_published: false,
  });

  const [antichristSuperstar, paleEmperor, digitalDistortion, crazyTrain] = await Album.create({
      title: 'Antichrist Superstar',
      artist: MarylinManson,
      year: 1996,
      image: 'mm.jpg',
      is_published: false,
    },
    {
      title: 'Pale Emperor',
      artist: MarylinManson,
      year: 2003,
      image: 'pl.jpg',
      is_published: false,
    },
    {
      title: 'Digital Distortion',
      artist: Iggy,
      year: 2017,
      image: 'iggy.jpg',
      is_published: true,
    }, {
      title: 'Crazy Train',
      artist: Ozzie,
      year: 1986,
      image: 'ozzie.jpg',
      is_published: true,
    });

  await Track.create({
      title: 'Man that you fear',
      album: antichristSuperstar,
      duration: '3:16',
      is_published: false,
    },
    {
      title: "Wow",
      album: antichristSuperstar,
      duration: "4:00",
      is_published: false,

    },
    {
      title: 'Tainted love',
      album: paleEmperor,
      duration: "3:17",
      is_published: false,
    },
    {
      title: 'Killing strangers',
      album: paleEmperor,
      duration: "3:17",
      is_published: true,
    },
    {
      title: 'Black Widow',
      album: digitalDistortion,
      duration: "3:18",
      is_published: true,
    },
    {
      title: 'Azillion',
      album: digitalDistortion,
      duration: "3:15",
      is_published: true,
    },
    {
      title: 'Blizzard of OZZ',
      album: crazyTrain,
      duration: "4:00",
      is_published: true,
    },
    {
      title: 'Down to Earth',
      album: crazyTrain,
      duration: "3:12",
      is_published: true,
    }
  );


  await mongoose.connection.close();
};

run().catch(e => console.error(e));