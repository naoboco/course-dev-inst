class Employee {
    constructor(
        private name: string,
        private salary: number,
        public position: string,
        protected department: string
    ) {}

    public getEmployeeInfo(): string {
        return `${this.name} works as ${this.position}`;
    }
}

const employee = new Employee("Daniel", 12000, "Developer", "Technology");
console.log(employee.getEmployeeInfo());

class Product {
    constructor(
        public readonly id: number,
        public name: string,
        public price: number
    ) {}

    public getProductInfo(): string {
        return `${this.name} costs $${this.price}`;
    }
}

const product = new Product(1, "Laptop", 1500);
console.log(product.getProductInfo());
console.log(`Product id ${product.id} is readonly`);

class Animal {
    constructor(public name: string) {}

    public makeSound(): string {
        return "The animal makes a sound";
    }
}

class Dog extends Animal {
    public makeSound(): string {
        return "bark";
    }
}

const dog = new Dog("Rex");
console.log(`${dog.name} says ${dog.makeSound()}`);

class Calculator {
    public static add(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(8, 3));
console.log(Calculator.subtract(8, 3));

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
    console.log(`Membership: ${user.membershipLevel ?? "Standard"}`);
}

const premiumUser: PremiumUser = {
    id: 101,
    name: "Sarah",
    email: "sarah@example.com",
    membershipLevel: "Gold"
};

printUserDetails(premiumUser);
