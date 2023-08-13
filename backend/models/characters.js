const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    default: () => new mongoose.Types.ObjectId('64bd3ef65391ec1e4d122a53')
  },
  style: {
    type: String,
    default: ''
  },
  abilities: [{
    name: {
      type: String,
      default: ''
    },
    uses: {
      type: Number,
      default: 0
    },
    _id: false
  }],
  description: {
    race: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    },
    eyes: {
      type: String,
      default: ''
    },
    hairs: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    lore: {
      type: String,
      default: ''
    },
    skin: {
      type: String,
      default: ''
    },
    weight: {
      type: Number,
      default: 0
    },
    references: {
      type: [String],
      default: []
    }
  },
  inventory: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    stacks: {
      type: Number,
      default: 0
    }
  }],
  statistics:{
    constitution: {
      type: Number,
      default: 0
    },
    strength: {
      type: Number,
      default: 0
    },
    dexterity: {
      type: Number,
      default: 0
    },
    intelligence: {
      type: Number,
      default: 0
    },
    wisdom: {
      type: Number,
      default: 0
    },
    charisma: {
      type: Number,
      default: 0
    },
    HP: {
      type: Number,
      default: 0
    },
    HPmax: {
      type: Number,
      default: 0
    },
    MP: {
      type: Number,
      default: 0
    },
    HPbase: {
      type: Number,
      default: 0
    }
  }
});

module.exports = mongoose.model('Characters', characterSchema);