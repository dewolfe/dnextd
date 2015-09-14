function CharacterGeneratorViewModel() {
    var self = this;
    var chartater = new Charater();
    self.numbers = ko.observableArray([1,2,3,4,5,6]);
    self.chosenclass2 =  ko.observableArray([]);
    self.chosenclass1 =   ko.observableArray([]);
    self.chosenRace = ko.observableArray([]);
    self.chosenAllignment = ko.observable();
    self.levelclass1 = ko.observable(0);
    self.levelclass2 = ko.observable(0);
    self.str = ko.observable(0);
    self.dex = ko.observable(0);
    self.con = ko.observable(0);
    self.int = ko.observable(0);
    self.wis = ko.observable(0);
    self.cha = ko.observable(0);
    self.race = ko.observable();
    self.target_numbers = ko.observableArray([self.str,self.dex,self.con,self.int,self.wis.self.cha]);

    self.aligenment = ko.observable();
    self.avaliableAllignment = ko.observableArray(['CE','LE','N','CG','LG']);

    this.availableRaces = new AvailableRaces();
    self.avaiableClasses = ko.observableArray(['Barbarian', 'Bard', 'Cleric',
     'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Wizard']);
    self.roll_4_d_6 = function() {
          self.numbers.removeAll();
          self.numbers.push(four_d_six());
    };
    self.str_drop = function (data, model) {
    model.numbers.remove(data);
    model.target.push(data);
};


}
