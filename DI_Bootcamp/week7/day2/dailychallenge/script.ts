function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (const type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }

    return false;
}

const username: string = "Naomie";
const age: number = 25;
const isStudent: boolean = true;
const score: number = 95;
const data: object = { name: "John" };

console.log(validateUnionType(username, ["string", "number"]));
console.log(validateUnionType(age, ["string", "boolean"]));
console.log(validateUnionType(isStudent, ["boolean", "number"]));
console.log(validateUnionType(score, ["number"]));
console.log(validateUnionType(data, ["object"]));
console.log(validateUnionType(null, ["string", "number"]));