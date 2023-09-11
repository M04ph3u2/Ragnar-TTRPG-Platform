const Character = require('../models/characters.js');
const Class = require('../models/classes.js');
const { ObjectId } = require('mongoose').Types;

module.exports = {

  charaNames: async (req, res) => {
    try {
      const charas = await Character.find({});
      const names = [];
      charas.forEach(chara => {
        names.push({name: chara.name, id: chara._id});
      });
      res.status(200).json(names);
    } catch (error) {
      console.error('Error while retrieving character sheets:', error);
      return res.status(500).json({ message: 'Error while retrieving character sheets' });
    }
  },

  charaNew: async (req, res) => {
    try {
      const {name, lvl, race, classId, style, region} = req.body;
      const {gender, age, eyes, hairs, height, skin, weight, lore, references} = req.body;
      const {constitution, strength, dexterity, intelligence, wisdom, charisma} = req.body;
      const {abilities, spells, inventory} = req.body;

      const classObj = await Class.find({_id: classId});
      let ki = 0;
      let miracles = 0;
      if (classObj.name === "Paladin") {
        miracles = 2;
      } else if (classObj.name === "Monk") {
        ki = 2;
      }
      
      let newAbilities;
      if (abilities) {
        newAbilities = abilities.map((abilityId) => ({id: abilityId}));
      }
      let newSpells;
      if (spells) {
        newSpells = abilities.map((spellId) => ({id: spellId}));
      }
      let newItems;
      if (items) {
        newItems = items.map((item) => ({item: item}));
      }
      
      const newCharacter = new Character({
        name: name,
        lvl: lvl,
        race: new ObjectId (race),
        classId: new ObjectId (classId),
        style: style,
        region: new ObjectId (region),
        description: {
          gender: gender,
          age: age,
          eyes: eyes,
          hairs: hairs,
          height: height,
          skin: skin,
          weight: weight,
          lore: lore,
          references: references
        },
        statistics: {
          constitution: constitution,
          strength: strength,
          dexterity: dexterity,
          intelligence: intelligence,
          wisdom: wisdom,
          charisma: charisma,
          HP: (classObj.statistics.baseHP + constitution),
          HPmax: (classObj.statistics.baseHP + constitution),
          MP: (intelligence*10),
          ki: ki,
          miracles: miracles
        },
        abilities: newAbilities,
        spells: newSpells,
        inventory: newItems
      });

      // Salva il nuovo personaggio nel database
      await newCharacter.save();

      // Invia una risposta di successo al client
      res.status(200).json({ message: 'New character created successfully', character: newCharacter });
    } catch (error) {
      console.error('Error while creating and sending to db a new chatacter:', error);
      return res.status(500).json({ message: 'Error while creating and sending to db a new chatacter' });
    }
  },

  sheetPrint: async (req, res) => {
    try {
      const {id} = req.body;
      const character = await Character.findOne({_id: id});
      res.status(200).json(character);
    } catch (error) {
      console.error('Error while retrieving the character sheet:', error);
      return res.status(500).json({ message: 'Error while retrieving the character sheet' });
    }
  },

  classPrint: async (req, res) => {
    try {
      const {classId} = req.body;
      const classObject = await Class.findOne({_id: classId});
      res.status(200).json(classObject);
    } catch (error) {
      console.error('Error while retrieving the class:', error);
      return res.status(500).json({ message: 'Error while retrieving the class' });
    }
  }
  
};