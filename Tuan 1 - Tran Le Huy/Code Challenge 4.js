//20127201 - Tran Le Huy
let bill, tip;

function TipCal(bill) {
    (bill < 300 && bill > 50) ?
    tip = bill * 15 / 100: tip = bill / 5;
    return console.log("The bill was " + bill + ", the tip is " + tip + ", and the total value: " + (parseFloat(tip) + parseFloat(bill)));
}

TipCal(430);