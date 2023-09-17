//20127201 - Tran Le Huy
let sc1, sc2;

let Average = (score) => ((score[0] + score[1] + score[2]) / 3).toFixed(1);

function Compare(score1, score2) {
    if (Average(score1) > Average(score2) * 2)
        return console.log("Dolphins win (" + Average(score1) + " vs " +
            Average(score2) +
            ")");
    else if (Average(score2) > Average(score1) * 2)
        return console.log("Koalas win (" + Average(score2) + " vs " +
            Average(score1) +
            ")");
    return console.log("No one wins");
}

function CheckWinner() {
    Compare([44, 23, 71], [65, 54, 49]);
    Compare([85, 54, 41], [23, 34, 27]);
}

CheckWinner();
