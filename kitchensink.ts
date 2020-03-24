function checkAge(name: string, age: number): void {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}



interface checkAgePeople {
    name: string,
    age: number
}

let people: Array<checkAgePeople> = [
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

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    checkAge(element.name, element.age);
}



let veggies: string[] = ["vegeta", "kakarot", "nappa", "broly", "raditz", "bardock"]

for(let i = 0; i < veggies.length; i++) {
   const element = veggies[i];
   console.log(element);
};






function getLength(word: string): void {
    word.length % 2 === 0 ? console.log("The world is nice and even") : console.log("The world is an odd place.");
}
getLength("Hello World")