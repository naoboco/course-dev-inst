const products = require("./products");

function findProduct(productName) {
    return products.find(product =>
        product.name.toLowerCase() === productName.toLowerCase()
    );
}

["Laptop", "Running Shoes", "Phone"].forEach(productName => {
    const product = findProduct(productName);

    if (product) {
        console.log(product);
    } else {
        console.log(`${productName} was not found`);
    }
});

module.exports = findProduct;
