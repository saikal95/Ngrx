const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Trackhistoryschema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: 'Track',
    required: true
  },
  dateTime: {
    type: String,
    required: true
  },

});

const TrackHistory = mongoose.model('User, Track', Trackhistoryschema);

module.exports = TrackHistory;

