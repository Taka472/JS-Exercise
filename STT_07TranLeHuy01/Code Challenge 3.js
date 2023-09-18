//20127201 - Tran Le Huy
let sc1, sc2;

function Average(score) {
    return (score[0] + score[1] + score[2]) / 3;
}

function Compare(score1, score2) {
    sc1 = Average(score1);
    sc2 = Average(score2);
    if (sc1 > sc2) {
        if (sc1 >= 100) return console.log("Dolphins win!");
        else return console.log("No one wins!");
    } else if (sc2 > sc1) {
        if (sc2 > 100) return console.log("Koalas win!");
        else return console.log("No one wins!");
    } else if (sc1 == sc2 && sc1 >= 100 && sc2 >= 100) return console.log("Draw!");
    return console.log("No one wins!");
}

Compare([96, 108, 89], [88, 91, 101]);
Compare([97, 112, 101], [109, 95, 123]);
Compare([97, 112, 101], [109, 95, 106]);
