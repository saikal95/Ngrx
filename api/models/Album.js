const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  image: String,
  is_published: boolean = false,
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

