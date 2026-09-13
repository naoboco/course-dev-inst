// Ex 1

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(
        name: string,
        salary: number,
        position: string,
        department: string
    ) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `${this.name} - ${this.position}`;
    }
}

const employee = new Employee(
    "Alice",
    5000,
    "Developer",
    "IT"
);

console.log(employee.getEmployeeInfo());


// Ex 2

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getProductInfo(): string {
        return `${this.name} costs ${this.price}`;
    }
}

const product = new Product(
    1,
    "Laptop",
    1200
);

console.log(product.getProductInfo());


//ex 3

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): string {
        return "Animal sound";
    }
}

class Dog extends Animal {
    public makeSound(): string {
        return "bark";
    }
}

const dog = new Dog("Rex");

console.log(dog.name);
console.log(dog.makeSound());


//ex4

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));


//exercice 5

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership: ${user.membershipLevel}`);
    }
}

const premiumUser: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    membershipLevel: "Gold"
};

printUserDetails(premiumUser);