const Class = require('./classes.js');
const Item = require('./items.js');
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: String,
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  style: String,
  abilities: [{
    ability: String,
    uses: Number
  }],
  description: {
    race: String,
    eyes: String,
    hairs: String,
    height: Number,
    lore: String,
    skin: String,
    weight: Number,
    references: [String]
  },
  inventory: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    stacks: Number
  }],
  statistics:{
    constitution: Number,
    strenght: Number,
    dexterity: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    HP: Number,
    HPmax: Number,
    MP: Number,
    HPbase: Number
  }
});

module.exports = mongoose.model('Characters', characterSchema);
