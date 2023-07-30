const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true,
    default: '' // Valore predefinito per il campo "name"
  },
  canstack: {
    type: Boolean,
    default: false // Imposta il valore predefinito a false (se non specificato)
  },
  description: {
    type: String,
    default: '' // Imposta il valore predefinito a una stringa vuota (se non specificato)
  },
  modifiers: [{
    type: {
      type: String,
      default: '' // Imposta il valore predefinito a una stringa vuota (se non specificato)
    },
    scaling: {
      type: String,
      default: '' // Imposta il valore predefinito a una stringa vuota (se non specificato)
    },
    maxscaling: {
      type: Number,
      default: 0 // Imposta il valore predefinito a 0 (se non specificato)
    },
    flat: {
      type: Number,
      default: 0 // Imposta il valore predefinito a 0 (se non specificato)
    }
  }]
});

module.exports = mongoose.model('Items', itemsSchema);