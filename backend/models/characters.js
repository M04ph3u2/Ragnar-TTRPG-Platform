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
    uses: Int64
  }],
  description: {
    race: String,
    eyes: String,
    hairs: String,
    height: Double,
    lore: String,
    skin: String,
    weight: Double,
    references: [String]
  },
  inventory: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    stacks: Int64
  }],
  statistics:{
    constitution: Int64,
    strenght: Int64,
    dexterity: Int64,
    intelligence: Int64,
    wisdom: Int64,
    charisma: Int64,
    HP: Int64,
    HPmax: Int64,
    MP: Int64,
    HPbase: Int64
  }
});

module.exports = mongoose.model('Characters', characterSchema);
