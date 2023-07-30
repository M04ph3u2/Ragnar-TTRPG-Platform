const Character = require('../models/characters.js');

module.exports = {

  charaNames: async (req, res) => {
    try {
      const charas = await Character.find({});
      const names = [];
      charas.forEach(chara => {
        names.push(chara.name + ' (' + chara._id + ')');
      });
      res.status(200).json(names);
    } catch (error) {
      console.error('Error while retrieving character sheets:', error);
      return res.status(500).json({ message: 'Error while retrieving character sheets' });
    }
  },

  charaNew: async (req, res) => {
    try {
      // Crea una nuova istanza del personaggio utilizzando il modello Character
    const newCharacter = new Character({
      /*
      name: name,
      class: classId,
      style: style,
      abilities: abilities,
      description: description,
      inventory: inventory,
      statistics: statistics
      */
      name: 'TEST'
    });

    // Salva il nuovo personaggio nel database
    await newCharacter.save();

    // Invia una risposta di successo al client
    res.status(200).json({ message: 'New character created successfully', character: newCharacter });
    } catch (error) {
      console.error('Error while creating and sending to db a new chatacter:', error);
      return res.status(500).json({ message: 'Error while creating and sending to db a new chatacter' });
    }
  }
  
};