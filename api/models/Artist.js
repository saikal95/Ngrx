const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
    unique: true
  },
  image: String,
  information: String
})

const Product = mongoose.model('Artist', ArtistSchema);


module.exports = Product;