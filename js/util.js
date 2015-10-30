var Stat = function (number) {
    this.stat = ko.observable(number);
};
var CharaterStat = function (name, chvm) {
    var charaterviewmod = chvm;
    this.name = name;
    this.base = ko.observable(0);
    this.modifier = ko.computed(function () {
        if (charaterviewmod.chosen_race().mod[name]) {
            return charaterviewmod.chosen_race().mod[name];
        } else {
            return 0;
        }
    }, this);
    this.sub_modifier = ko.computed(function () {
        if (charaterviewmod.chosen_sub_race()) {
            if (charaterviewmod.chosen_sub_race().mod[name]) {
                return charaterviewmod.chosen_sub_race().mod[name];
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }, this);
    this.total = function () {
        return this.base() + this.modifier();
    };
    this.saving_throw = ko.computed(function () {
        return Math.floor(((this.base() + this.modifier()) - 10) / 2);
    }, this);
};
function four_d_six(self) {
    var that = self;
    var numbers_array = [];
    var stats_array = [];
    for (i = 0; i < 8; i++) {
        var n = 0;
        for (x = 0; x < 4; x++) {
            n += Math.floor((Math.random() * 6) + 1);
        }
        numbers_array[i] = n;
    }
    for (y = 0; y < 2; y++) {
        var nmin = Math.min(null, numbers_array);
        numbers_array.splice(numbers_array.indexOf(nmin), 1);
    }

    $.each(numbers_array, function (index, value) {
        that.target_numbers()[index].stat(value);
    });
    return stats_array;
}
