function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === "string")) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Error: All elements must be strings.");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve([...words].sort());
        } else {
            reject("Error: Array must contain more than 4 words.");
        }
    });
}

makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));