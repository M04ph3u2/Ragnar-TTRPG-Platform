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
    maxscaling: Int64,
    flat: Int64
  }]
});

module.exports = mongoose.model('Items', itemsSchema);
