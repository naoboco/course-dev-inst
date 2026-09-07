"use strict";
const resident = {
    name: "Leah",
    age: 28,
    street: "Jaffa Street",
    city: "Jerusalem"
};
console.log(resident);
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    return "This is a string";
}
console.log(describeValue(42));
console.log(describeValue("forty-two"));
const someValue = "typescript";
const stringValue = someValue;
console.log(stringValue.toUpperCase());
function getFirstElement(values) {
    return values[0];
}
console.log(getFirstElement(["first", 2, "third"]));
console.log(getFirstElement(["hello", 15]));
function logLength(value) {
    console.log(value.length);
}
logLength("Developers Institute");
logLength([1, 2, 3, 4]);
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return `${employee.name} manages the ${employee.department} department.`;
    }
    if (employee.position === "Developer") {
        return `${employee.name} develops projects for the ${employee.department} department.`;
    }
    return `${employee.name} works as ${employee.position} in ${employee.department}.`;
}
const manager = {
    name: "Maya",
    age: 34,
    position: "Manager",
    department: "Technology"
};
const developer = {
    name: "Yoel",
    age: 24,
    position: "Developer",
    department: "Web"
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
function formatInput(input) {
    const value = input.toString();
    return `Formatted: ${value}`;
}
console.log(formatInput(2026));
console.log(formatInput("Israel"));
