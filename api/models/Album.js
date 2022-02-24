const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  singer: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cover: String,
  image: String
});

const Product = mongoose.model('Album', AlbumSchema);

module.exports = Product;
