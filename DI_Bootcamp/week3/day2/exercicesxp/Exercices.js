//ex1
function displayNumbersDivisible(divisor) {
    let sum = 0;

    for (let i = 0;i <= 500;i++) {
        if (i % divisor === 0){
            console.log(i);
            sum = sum + i;
        }
    }

    console.log("Sum :", sum);
}

displayNumbersDivisible(23);

//ex2

const stock = { 
    "Banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "Blueberry": 1
};

const prices = {    
    "Banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "Blueberry": 10
};

const shoppingList = ["Banana", "orange", "apple"];

function myBill() {
    let total = 0;

    for (let item of shoppingList) {

        if (item in stock && stock[item] > 0) {
            total = total + prices[item];

            stock[item] = stock[item] - 1;
        }
    }

    return total;
}

console.log(myBill());
console.log(stock);

//ex 3 

function changeEnough(itemPrice, amountOfChange) {

    let quarters = amountOfChange[0] * 0.25;
    let dimes = amountOfChange[1] * 0.10;
    let nickels = amountOfChange[2] * 0.05;
    let pennies = amountOfChange[3] * 0.01;

    let total = quarters + dimes + nickels + pennies;

    if (total >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

//ex 4 

function hotelCost() {
    let nights = prompt("How many nights would you like to stay?");

    while (nights === null || nights.trim() === "" || isNaN(nights)) {
        nights = prompt("Please enter a valid number of nights:");
    }

    nights = Number(nights);

    return nights * 140;
}


function planeRideCost() {
    let destination = prompt("What is your destination?");

    while (destination === null || destination.trim() === "") {
        destination = prompt("Please enter a valid destination:");
    }

    destination = destination.toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}


function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");

    while (days === null || days.trim() === "" || isNaN(days)) {
        days = prompt("Please enter a valid number of days:");
    }

    days = Number(days);

    let total = days * 40;

    if (days > 10) {
        total = total * 0.95;
    }

    return total;
}


function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();

    let total = hotel + plane + car;

    console.log("The car cost: $" + car);
    console.log("The hotel cost: $" + hotel);
    console.log("The plane tickets cost: $" + plane);
    console.log("Total vacation cost: $" + total);

    return total;
}


totalVacationCost();

//ex5

