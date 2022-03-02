const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  duration: {
    type: String,
    required: true
  },

});

const Track = mongoose.model('Product', TrackSchema);

module.exports = Track;
