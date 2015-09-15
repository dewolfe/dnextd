

function CharacterGeneratorViewModel() {
  var self = this;
  var chartater = new Charater();
  self.numbers = ko.observableArray([1, 2, 3, 4, 5, 6]);
  self.chosenclass2 = ko.observableArray([]);
  self.chosenclass1 = ko.observableArray([]);
  self.chosenRace = ko.observableArray([]);
  self.chosenAllignment = ko.observable();
  self.levelclass1 = ko.observable(0);
  self.levelclass2 = ko.observable(0);
  self.availableRaces = new AvailableRaces();
  self.race = ko.observable(self.availableRaces.races[0]);

  self.str = new CharaterStat("str",self.race);
  self.dex = new CharaterStat("dex",self.race);
  self.con = new CharaterStat("con",self.race);
  self.int = new CharaterStat("int",self.race);
  self.wis = new CharaterStat("wis",self.race);
  self.cha = new CharaterStat("cha",self.race);

  self.stats_array =[self.str,self.dex,self.con,self.int,self.wis,self.cha];
  self.target_numbers = ko.observableArray([new Stat(0),new Stat(0),new Stat(0),
                                            new Stat(0),new Stat(0),new Stat(0)]);

  self.aligenment = ko.observable();
  self.avaliableAllignment = ko.observableArray(['CE', 'LE', 'N', 'CG', 'LG']);

  self.avaiableClasses = ko.observableArray(['Barbarian', 'Bard', 'Cleric',
    'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Wizard'
  ]);

  self.roll_4_d_6 = function() {
    four_d_six(this);
    self.populate_stats(0);
  };
  self.str_drop = function(data, model) {
    model.numbers.remove(data);
    model.target.push(data);
  };
  self.populate_stats = function(arg){
    $.each(self.target_numbers(), function(i,v){
      self.stats_array[i].base(v.stat());
    });
  };
  self.roll_4_d_6();
}