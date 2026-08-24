//ex1 cest le resultat
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//ex2 
function displayStudentInfo(objUser) {
    const { first, last } = objUser;

    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last: 'Schoppik'}));

//ex3

const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315
};

const usersArray = Object.entries(users);

console.log(usersArray);

const doubledUsers = usersArray.map(user => {
    return [user[0], user[1] * 2];
});

console.log(doubledUsers);

//ex5
//rep2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

//6

console.log([2] === [2]);
console.log({} === {});

console.log([2] === [2]);
console.log({} === {});

// sa va mettre false et false
// meme si ya la meme chose dedans cest pas la meme reference
// donc js considere que cest pas le meme objet ou tableau


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

// la normalement sa donne 4 4 et 5
// object2 et object3 sont relier a object1 enfin ils pointe sur le meme
// donc quand je change number dans object1 sa change aussi pour les autre
// mais object4 cest un autre objet meme si il ressemble donc lui reste a 5


class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}


// ici Mammal recupere Animal avec extends
// super sert a reprendre le constructor de Animal je crois enfin pour avoir
// name type color dans Mammal aussi

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));

// ici je creer la vache avec les info
// et apres jappel sound avec Moooo

// resultat en gros
// false
// false
// 4
// 4
// 5
// Moooo I'm a cow, named Lily and I'm brown and white

// le truc surtout cest que les objets sont pas comparer juste avec leur contenu
// cest leur reference qui compte
// et pour les class Mammal herite de Animal et super permet de recuperer le constructor