type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const resident: PersonWithAddress = {
    name: "Leah",
    age: 28,
    street: "Jaffa Street",
    city: "Jerusalem"
};

console.log(resident);

function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    }

    return "This is a string";
}

console.log(describeValue(42));
console.log(describeValue("forty-two"));

const someValue: any = "typescript";
const stringValue = someValue as string;
console.log(stringValue.toUpperCase());

function getFirstElement(values: Array<number | string>): string {
    return values[0] as string;
}

console.log(getFirstElement(["first", 2, "third"]));
console.log(getFirstElement(["hello", 15]));

function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

logLength("Developers Institute");
logLength([1, 2, 3, 4]);

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} manages the ${employee.department} department.`;
    }

    if (employee.position === "Developer") {
        return `${employee.name} develops projects for the ${employee.department} department.`;
    }

    return `${employee.name} works as ${employee.position} in ${employee.department}.`;
}

const manager: Employee = {
    name: "Maya",
    age: 34,
    position: "Manager",
    department: "Technology"
};

const developer: Employee = {
    name: "Yoel",
    age: 24,
    position: "Developer",
    department: "Web"
};

console.log(describeEmployee(manager));
console.log(describeEmployee(developer));

function formatInput<T extends { toString(): string }>(input: T): string {
    const value = input.toString() as string;
    return `Formatted: ${value}`;
}

console.log(formatInput(2026));
console.log(formatInput("Israel"));
