// const inquirer = require("inquirer").default;
const promptSync = require("prompt-sync")();

console.log("Dice Roller Application starts...");
/**
 * Roll a random dice side from a rolling of a dice.
 * @param {number} diceSide The total number of sides on the dice
 * @returns The side of the dice rolled.
 */
function rollDice(diceSide=6) {
    if (diceSide <= 0) {
        throw new Error("Dice must be greater than 0.");
    }
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}

//console.log("The dice side you rolled is: " + rollDice());

// const prompt = inquirer.createPromptModule();

// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll ?"
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side))
// });

const diceSide = promptSync("How many sided dice do you want to roll ??");

try{
    const parsedDiceSide = parseInt(diceSide);
    if (isNaN(parsedDiceSide)){
        throw new Error(" Please enter a valid number.");
    }
    const diceResult = rollDice(parsedDiceSide);
    console.log(`Your rolled a ${diceResult}- sided dice.`);
} catch (error) {
    console.error("You got a error!!!");
    console.log(error);
}