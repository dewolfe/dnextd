function CharacterGeneratorViewModel() {
  var self = this;
  var chartater = new Charater();
  self.numbers = ko.observableArray([1, 2, 3, 4, 5, 6]);
  self.chosenRace = ko.observableArray([]);
  self.chosenAllignment = ko.observable();
  self.availableRaces = new AvailableRaces();
  self.availableBackgrounds = new AvailableBackgrounds();
  self.charater_name = ko.observable();
  self.player_name = ko.observable();
  self.remove_me = ko.observable();
  self.race = ko.observable(self.availableRaces.races[0]);
  self.skills = ko.observableArray(skills);
  self.levelclass1 = ko.observable(1);
  self.levelclass2 = ko.observable();
  self.proficient_skill = ko.observableArray([]);

  self.str = new CharaterStat("str", self.race);
  self.dex = new CharaterStat("dex", self.race);
  self.con = new CharaterStat("con", self.race);
  self.int = new CharaterStat("int", self.race);
  self.wis = new CharaterStat("wis", self.race);
  self.cha = new CharaterStat("cha", self.race);
  self.avaiableClasses =  new AvaiableClasses(self);
  self.chosenclass1 = ko.observable(self.avaiableClasses.dclasses[0]);
  self.chosenclass2 = ko.observable();
  self.chosesbackgroud = ko.observable();

  self.stats_array = [self.str, self.dex, self.con, self.int, self.wis, self.cha];
  self.target_numbers = ko.observableArray([new Stat(0), new Stat(0), new Stat(0),
    new Stat(0), new Stat(0), new Stat(0)
  ]);
  self.proficient_bouns=ko.computed(function(){
     return self.chosenclass1().proficiency[self.levelclass1()];
  },this);

  self.aligenment = ko.observable();
  self.avaliableAllignment = ko.observableArray(['CE', 'LE', 'N', 'CG', 'LG']);
  self.skill_modifier = function(data) {
    var proficient = 0;
    if (self.proficient_skill().indexOf(data) >= 0) {
      proficient = self.proficient_bouns();
    }
    if (self.chosesbackgroud().skill_proficiencies)
    return self[data.check].saving_throw() + proficient;
  };
  self.enable_skill =function(data){
    if(self.chosenclass1().skills.indexOf(data.name) >= 0){
      return true;
    }else{
      return false;
    }
  };

  self.roll_4_d_6 = function() {
    four_d_six(this);
    self.populate_stats(0);
  };
  self.str_drop = function(data, model) {
    model.numbers.remove(data);
    model.target.push(data);
  };

  self.populate_stats = function(arg) {
    $.each(self.target_numbers(), function(i, v) {
      self.stats_array[i].base(v.stat());
    });
  };
  self.roll_4_d_6();

}
