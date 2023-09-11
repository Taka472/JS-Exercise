//20127201 - Tran Le Huy
let BMI1, BMI2;

function BMICal(mass, height) {
    return mass / (height * height);
}

function markHigherBMI(mass1, height1, mass2, height2) {
    BMI1 = BMICal(mass1, height1);
    BMI2 = BMICal(mass2, height2);
    if (BMI1 > BMI2) return true;
    return false;
}

console.log(markHigherBMI(78, 1.69, 92, 1.95));