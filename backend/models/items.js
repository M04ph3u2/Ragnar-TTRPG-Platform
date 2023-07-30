const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: String,
  canstack: Boolean,
  description: String,
  modifiers: [{
    type: String,
    scaling: String,
    maxscaling: Number,
    flat: Number
  }]
});

module.exports = mongoose.model('Items', itemsSchema);
