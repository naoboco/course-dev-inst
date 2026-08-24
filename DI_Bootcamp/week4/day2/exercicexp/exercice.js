//ex1

function funcOne() {
    let a = 5;

    if (a > 1) {
        a = 3;
    }

    alert(`inside the funcOne function ${a}`);
}

// a commence a 5.
// comme 5 est plus grand que 1 la condition est vrai.
// donc a change et devient 3.
// l'alert va afficher 3.

funcOne();

// si on met const a la place de let,
// on peu pas changer la valeur de a.
// donc a = 3 va faire une erreur.

let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// au debut a vaut 0.
// le premier funcThree va donc afficher 0.
// apres funcTwo change la valeur de a et le met a 5.
// le deuxieme funcThree va afficher 5.

funcThree();
funcTwo();
funcThree();

// si a est en const on peu pas changer sa valeur.
// donc funcTwo va faire une erreur quand il essaye de mettre a = 5.

function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// funcFour creer une variable global avec window.a.
// la valeur de a devient "hello".
// funcFive peu donc recuperer cette variable.
// l'alert va afficher hello.

funcFour();
funcFive();

let a = 1;

function funcSix() {
    let a = "test";

    alert(`inside the funcSix function ${a}`);
}

// le premier a vaut 1 mais il est a l'exterieur de la fonction.
// dans funcSix on creer un nouveaux a qui vaut "test".
// le a dans la fonction est donc different de celui a l'exterieur.
// l'alert va afficher test.

funcSix();

// si on met const a la place de let sa marche aussi.
// on change jamais la valeur donc il y a pas d'erreur.

let a = 2;

if (true) {
    let a = 5;

    alert(`in the if block ${a}`);
}

alert(`outside of the if block ${a}`);

// le a dans le if est une nouvelle variable.
// dans le if a vaut donc 5.
// quand on sort du if on retourne sur le premier a qui vaut 2.
// le premier alert affiche 5 et le deuxieme affiche 2.

// avec const sa marche aussi parce que les deux a
// sont dans des scope different et on change pas leurs valeur.

//ex2

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

//ex3 

const isString = (value) => typeof value === "string";

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

//e4

const sum = (a, b) => a + b;

console.log(sum(5, 3));

//ex5
function convertKgToGrams(weight) {
    return weight * 1000;
}

console.log(convertKgToGrams(5));


const convertWeight = function(weight) {
    return weight * 1000;
};

console.log(convertWeight(3));


// Function declaration is created directly, while function expression is stored inside a variable.


const kgToGrams = weight => weight * 1000;

console.log(kgToGrams(7));
