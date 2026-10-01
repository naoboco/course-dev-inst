let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

const cloneGroceries = () => {
    let user = client;

    client = "Betty";

    console.log("Client:", client);
    console.log("User:", user);

    let shopping = groceries;

    groceries.totalPrice = "35$";

    console.log("Groceries total:", groceries.totalPrice);
    console.log("Shopping total:", shopping.totalPrice);

    groceries.other.paid = false;

    console.log("Groceries paid:", groceries.other.paid);
    console.log("Shopping paid:", shopping.other.paid);
};

displayGroceries();
cloneGroceries();