// ex1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is smaller than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ex2
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

promise.then(result => console.log(result));

// ex3
Promise.resolve(3)
    .then(result => console.log(result));

Promise.reject("Boo!")
    .catch(error => console.log(error));
