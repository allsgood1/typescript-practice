function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
var people = [
    {
        name: "Aaron",
        age: 25
    },
    {
        name: "Jillian",
        age: 22
    },
    {
        name: "Ryan",
        age: 25
    },
    {
        name: "Connor",
        age: 21
    }
];
for (var i = 0; i < people.length; i++) {
    var element = people[i];
    checkAge(element.name, element.age);
}
var veggies = ["vegeta", "kakarot", "nappa", "broly", "raditz", "bardock"];
for (var i = 0; i < veggies.length; i++) {
    var element = veggies[i];
    console.log(element);
}
;
function getLength(word) {
    word.length % 2 === 0 ? console.log("The world is nice and even") : console.log("The world is an odd place.");
}
getLength("Hello World");
