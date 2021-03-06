function Barbarian(chvm) {
    var self = this;
    var charater_view_model = chvm;
    self.name = "Barbarian";
    self.sub_class = "";
    self.skills = ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"];
    self.proficiency = [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
    self.hitdice = "1d12";
    self.hp_level_1 = 12;
    self.sub_skill = {
        "name": 'Rage',
        "points": [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6]
    };
    self.sub_skill_modifier = {
        "name": 'Rage Damage',
        "modifier": [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]
    };
    self.feature = [
        new Feature(1,
            "Rage",
            "Advantage on Strength checks and Strength saving throws" +
            "bonus to the damage" +
            "resistance to bludgeoning, piercing, and slashing damage"
        ),
        new Features(1,
            "Unarmored Defence",
            "Your Armor Class " +
            "equals 10 + your Dexterity modifier + your Constitution " +
            "modifier."
        )


    ]


}
ls