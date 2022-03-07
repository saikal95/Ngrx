const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar:{
    type: String,
  },
  displayName: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  // validate: {
  //   validator: async value => {
  //     const user = await User.findOne({email: value});
  //     if(user) return false;
  //   },
  //   message: 'This user is already registered'
  //
  // }
});


const SALT_WORK_FACTOR = 8;

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;
  next();
});

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function() {
  this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;