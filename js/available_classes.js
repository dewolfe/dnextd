function AvaiableClasses(chvm) {
  var self = this;
  var charaterviewmod = chvm;
  self.celricspells_known = ko.computed(function() {
    return charaterviewmod.levelclass1() + charaterviewmod.wis.modifier();
  }, this);
  self.dclasses = [{
      "name": "Cleric",
      "skills": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
      "proficiency": [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
      "skills_known": self.celricspells_known(),
      "spells_slots": [
        [0, 0],
        [3, 2],
        [3, 4, 2],
        [4, 4, 3],
        [4, 4, 3, 2],
        [4, 4, 3, 3],
        [4, 4, 3, 3, 1],
        [4, 4, 3, 3, 2],
        [4, 4, 3, 3, 3, 1],
        [5, 4, 3, 3, 3, 2],
        [5, 4, 3, 3, 3, 2, 1],
        [5, 4, 3, 3, 3, 2, 1],
        [5, 4, 3, 3, 3, 2, 1, 1],
        [5, 4, 3, 3, 3, 2, 1, 1],
        [5, 4, 3, 3, 3, 2, 1, 1, 1],
        [5, 4, 3, 3, 3, 2, 1, 1, 1],
        [5, 4, 3, 3, 3, 2, 1, 1, 1, 1],
        [5, 4, 3, 3, 3, 3, 1, 1, 1, 1],
        [5, 4, 3, 3, 3, 3, 2, 1, 1, 1],
        [5, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      ]

    }, {
      "name": "Barbarian",
      "skills": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
      "proficiency": [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
      "sub_skill": {
        "name": 'Rage',
        "points": [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6]
      },

    }, {

      "name": "Bard",
      "skills": ["Athletics", "Investigation", "Perception", "Acrobatics",
        "Nature", "Survival", "Slight of Hand", "Religion", "Deception", "Stealth", "Animal Handling",
        "Intimidation", "Arcana", "Insight", "Performance", "History", "Medicine", "Persuasion"
      ],
      "proficiency": [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
      "spells_slots": [
        [0, 0],
        [2, 2],
        [2, 3],
        [2, 4, 2],
        [3, 4, 3],
        [3, 4, 3, 2],
        [3, 4, 3, 3],
        [3, 4, 3, 3, 1],
        [3, 4, 3, 3, 2],
        [3, 4, 3, 3, 3, 1],
        [4, 4, 3, 3, 3, 2],
        [4, 4, 3, 3, 3, 2, 1],
        [4, 4, 3, 3, 3, 2, 1],
        [4, 4, 3, 3, 3, 2, 1, 1],
        [4, 4, 3, 3, 3, 2, 1, 1],
        [4, 4, 3, 3, 3, 2, 1, 1, 1],
        [4, 4, 3, 3, 3, 2, 1, 1, 1, 1],
        [4, 4, 3, 3, 3, 3, 1, 1, 1, 1],
        [4, 4, 3, 3, 3, 3, 2, 1, 1, 1],
        [4, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      ]

    }

  ];


}
