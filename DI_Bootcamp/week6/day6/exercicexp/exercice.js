"use strict";
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `${this.name} works as ${this.position}`;
    }
}
const employee = new Employee("Daniel", 12000, "Developer", "Technology");
console.log(employee.getEmployeeInfo());
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `${this.name} costs $${this.price}`;
    }
}
const product = new Product(1, "Laptop", 1500);
console.log(product.getProductInfo());
console.log(`Product id ${product.id} is readonly`);
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "The animal makes a sound";
    }
}
class Dog extends Animal {
    makeSound() {
        return "bark";
    }
}
const dog = new Dog("Rex");
console.log(`${dog.name} says ${dog.makeSound()}`);
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(Calculator.add(8, 3));
console.log(Calculator.subtract(8, 3));
function printUserDetails(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Membership: ${user.membershipLevel ?? "Standard"}`);
}
const premiumUser = {
    id: 101,
    name: "Sarah",
    email: "sarah@example.com",
    membershipLevel: "Gold"
};
printUserDetails(premiumUser);
