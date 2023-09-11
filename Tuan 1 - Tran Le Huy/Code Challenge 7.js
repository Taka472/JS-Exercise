//20127201 - Tran Le Huy
const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
};

const John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
};

function BMICal(Obj) {
    return Obj.mass / (Obj.height * Obj.height);
}

function Compare(obj1, obj2) {
    if (BMICal(obj1) > BMICal(obj2)) return console.log(obj1.fullName + "'s BMI (" +
        BMICal(obj1) + ") is higher than " + obj2.fullName + " (" + BMICal(obj2) + ")!");
    return console.log(obj2.fullName + "'s BMI (" +
        BMICal(obj2) + ") is higher than " + obj2.fullName + " (" + BMICal(obj1) + ")!");
}

Compare(Mark, John);