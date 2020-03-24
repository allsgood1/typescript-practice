document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate-die");
    var rollButton = document.getElementById("roll-die");
    var sumButton = document.getElementById("sum-die");
    var diceContainer = document.getElementById("dice-container");
    var diceArr = [];
    generateButton.addEventListener("click", function () {
        new Die();
    });
    rollButton.addEventListener("click", function () {
        diceArr.forEach(function (die) { return die.roll(); });
    });
    sumButton.addEventListener("click", function () {
        var sum = 0;
        diceArr.forEach(function (die) {
            sum = sum + die.value;
        });
        alert(sum);
    });
    var Die = /** @class */ (function () {
        function Die() {
            this.value;
            this.div = document.createElement("div");
            this.div.className = "die";
            this.div.id = "numOfDice";
            this.roll();
            diceArr.push(this);
            console.log(diceArr);
            diceContainer.appendChild(this.div);
        }
        Die.prototype.roll = function () {
            var randomVal = Math.floor(Math.random() * 6 + 1);
            this.value = randomVal;
            this.div.innerText = this.value;
        };
        return Die;
    }());
});
