//20127201 - Tran Le Huy
let BMI1, BMI2;

function BMICal(mass, height) {
    return mass / (height * height);
}

function markHigherBMI(mass1, height1, mass2, height2) {
    BMI1 = BMICal(mass1, height1).toFixed(1);
    BMI2 = BMICal(mass2, height2).toFixed(1);
    if (BMI1 > BMI2) return console.log("Mark's BMI (" + BMI1 + ") is higher than John's (" + BMI2 + ")!");
    return console.log("John's BMI (" + BMI2 + ") is higher than Mark's (" + BMI1 + ")!");
}

markHigherBMI(78, 1.69, 92, 1.95);