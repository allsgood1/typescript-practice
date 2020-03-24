document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-die")! as HTMLButtonElement;
    const rollButton = document.getElementById("roll-die")! as HTMLButtonElement;
    const sumButton = document.getElementById("sum-die")! as HTMLButtonElement;
    const diceContainer = document.getElementById("dice-container")! as HTMLBodyElement; let diceArr = []; generateButton.addEventListener("click", () => {
        new Die();
    });
    rollButton.addEventListener("click", () => {
        diceArr.forEach(die => die.roll());
    });
    sumButton.addEventListener("click", () => {
        let sum = 0;
        diceArr.forEach(die => {
            sum = sum + die.value;
        });
        alert(sum);
    }); class Die {
        value: any;
        div: HTMLDivElement;
        constructor() {
            this.value;
            this.div = document.createElement("div");
            this.div.className = "die";
            this.div.id = "numOfDice";
            this.roll();
            diceArr.push(this);
            console.log(diceArr);
            diceContainer.appendChild(this.div);
        } 
        roll() {
            let randomVal = Math.floor(Math.random() * 6 + 1);
            this.value = randomVal;
            this.div.innerText = this.value;
        }
    }
});