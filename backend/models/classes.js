const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true,
    default: '' // Valore predefinito per il campo "name"
  },
  styles: [{
    name: {
      type: String,
      default: '' // Valore predefinito per il campo "name" all'interno di "styles"
    },
    description: {
      type: String,
      default: '' // Valore predefinito per il campo "description" all'interno di "styles"
    }
  }],
  description: {
    type: String,
    default: '' // Valore predefinito per il campo "description"
  },
  paths: [{
    name: {
      type: String,
      default: '' // Valore predefinito per il campo "name" all'interno di "paths"
    },
    abilities: [{
      name: {
        type: String,
        default: '' // Valore predefinito per il campo "name" all'interno di "abilities"
      },
      type: {
        type: String,
        default: '' // Valore predefinito per il campo "type" all'interno di "abilities"
      },
      canlevel: {
        type: Boolean,
        default: false // Valore predefinito per il campo "canlevel" all'interno di "abilities"
      },
      tier: {
        type: String,
        default: '' // Valore predefinito per il campo "tier" all'interno di "abilities"
      },
      basedescription: {
        type: String,
        default: '' // Valore predefinito per il campo "basedescription" all'interno di "abilities"
      },
      levelsdescriptions: {
        type: [String],
        default: [] // Valore predefinito per il campo "levelsdescriptions" all'interno di "abilities"
      }
    }]
  }],
  modifiers: [{
    type: {
      type: String,
      default: '' // Valore predefinito per il campo "type" all'interno di "modifiers"
    },
    flat: {
      type: Number,
      default: 0 // Valore predefinito per il campo "flat" all'interno di "modifiers"
    },
    scaling: {
      type: Number,
      default: 0 // Valore predefinito per il campo "scaling" all'interno di "modifiers"
    },
    maxscaling: {
      type: Number,
      default: 0 // Valore predefinito per il campo "maxscaling" all'interno di "modifiers"
    }
  }]
});

module.exports = mongoose.model('Classes', classesSchema);