const inquirer = require("inquirer").default;

console.log("Dice Roller Application starts...");
/**
 * Roll a random dice side from a rolling of a dice.
 * @param {number} diceSide The total number of sides on the dice
 * @returns The side of the dice rolled.
 */
function rollDice(diceSide=6) {
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}

//console.log("The dice side you rolled is: " + rollDice());

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "number",
        name: "dice_side",
        message: "How many sided dice do you want to roll ?"
    }
]).then((answer) => {
    console.log(rollDice(answer.dice_side))
});

