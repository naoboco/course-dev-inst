function isAnagram(str1, str2) {
    const cleanString = str => {
        return str
            .toLowerCase()
            .replace(/\s+/g, "")
            .split("")
            .sort()
            .join("");
    };

    return cleanString(str1) === cleanString(str2);
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("Hello", "World"));