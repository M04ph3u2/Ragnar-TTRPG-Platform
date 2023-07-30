const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: String,
  styles: [{
    name: String,
    description: String
  }],
  description: String,
  paths: [{
    name: String,
    abilities: [{
      name: String,
      type: String,
      canlevel: Boolean,
      tier: String,
      basedescription: String,
      levelsdescriptions: [String]
    }]
  }],
  modifiers: [{
    type: String,
    flat: Number,
    scaling: Number,
    maxscaling: Number
  }]
});

module.exports = mongoose.model('Classes', classesSchema);