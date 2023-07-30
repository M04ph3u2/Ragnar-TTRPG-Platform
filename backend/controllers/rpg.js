const Character = require('../models/characters.js');

module.exports = {

  charaNames: async (req, res) => {
    try {
      const charas = await Character.find({});
      const names = [];
      charas.forEach(chara => {
        names.push(chara.name + '(' + chara._id + ')');
      });
      res.status(200).json(names);
    } catch (error) {
      console.error('Error while retrieving character sheets:', error);
      return res.status(500).json({ message: 'Error while retrieving character sheets' });
    }
  }
  
};