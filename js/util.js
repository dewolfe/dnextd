function four_d_six()  {
    var numbers_array = [];
    for (i=0; i<8; i++){
        var n = 0;
        for (x=0; x<4 ;x++){
            n += Math.floor((Math.random() * 6) + 1);
        }
        numbers_array[i]=n;
    }
    for (y=0; y<2; y++) {
        var nmin = Math.min(null, numbers_array);
        numbers_array.splice(numbers_array.indexOf(nmin), 1);
    }
    return numbers_array;
}
