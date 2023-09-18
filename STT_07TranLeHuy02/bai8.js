var f = function(resolve, reject) {
    resolve = () => { console.log("Success"); };
    reject = () => { console.log("Fail"); };
}

var promise = new Promise(f);
console.log(promise);