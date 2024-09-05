let rollCount = 0;
const maxRolls = 7;
let totalMarks = [];
let sumOfMarks = 0;

function allowDrop(event) {
    event.preventDefault();
}

// function drag(event){
// 	// Target of the drag event is the thing that we are dragging
// 	event.dataTransfer.setData("text", event.target.id);
// 	console.log("On drag, set data of: " + event.target.id);
// }

function drag(event) {
    const elementId = event.currentTarget.id;
    console.log('Dragging element with id:', elementId);  // Debugging
    event.dataTransfer.setData("text", elementId);
}

function drop(event) {
    event.preventDefault();

    if (rollCount < maxRolls) {
        // Only clear the dice, not the whole diceRollingArea
        clearOldDice();

        // Clone and update dice image with new value
        let diceCopy = document.getElementById("diceImage").cloneNode(true);
        let diceValue = rollDice();
        diceCopy.querySelector("p").innerText = diceValue;

        // Append the dice to the rolling area (middle)
        diceCopy.style.position = 'absolute';
        diceCopy.style.left = '50%';
        diceCopy.style.top = '50%';
        diceCopy.style.transform = 'translate(-50%, -50%)';
        document.getElementById("diceRollingArea").appendChild(diceCopy);

        // Update dice marks display
        updateMarks(diceValue);

        // Increment roll count
        rollCount++;

        if (rollCount === maxRolls) {
            displayGameFinishMessage();
            setTimeout(resetGame, 3000); // Reset game after 3 seconds delay
        }
    }
}

function rollDice(diceSize = 20) {
    return Math.floor(Math.random() * diceSize) + 1;
}

function updateMarks(diceValue) {
    // Add the dice value to the array and update sum
    totalMarks.push(diceValue);
    sumOfMarks += diceValue;

    // Display the rolling marks like "8 + 3 + 17 +"
    let marksString = totalMarks.join(' + ') + ' = ' + sumOfMarks;
    const calculateMarksDiv = document.getElementById("calculateMarks");
    calculateMarksDiv.style.display = 'block';
    calculateMarksDiv.innerText = marksString;
}

function displayGameFinishMessage() {
    // Display the final sum and game completion message
    let finishMessage = "Game finished! Your total score: " + sumOfMarks;
    document.getElementById("calculateMarks").innerText = finishMessage;

    // Create a red alert message
    let alertDiv = document.createElement("div");
    // alertDiv.innerText = "Game finished! Your total score: " + sumOfMarks;
	alertDiv.innerText = "Game finished!";
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "70%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.backgroundColor = "red";
    alertDiv.style.color = "white";
    alertDiv.style.padding = "20px";
    alertDiv.style.fontSize = "30px";
    alertDiv.style.borderRadius = "10px";
    alertDiv.style.zIndex = "1000";  // Ensures it stays on top of other elements

    document.body.appendChild(alertDiv);

    // Remove the alert after 2 seconds and reset the game
    setTimeout(() => {
        document.body.removeChild(alertDiv);
        resetGame();  // Reset game after the alert disappears
    }, 3000);
}


function resetGame() {
    // Reset game state
    rollCount = 0;
    totalMarks = [];
    sumOfMarks = 0;

    // Clear the dice area
    clearOldDice();

    // Reset the calculateMarks div
    const calculateMarksDiv = document.getElementById("calculateMarks");
    calculateMarksDiv.innerText = '';
    calculateMarksDiv.style.display = 'none';
}

// Clears only the dice from the rolling area
function clearOldDice() {
    const diceRollingArea = document.getElementById("diceRollingArea");
    const diceImage = diceRollingArea.querySelector("#diceImage");
    if (diceImage) {
        diceRollingArea.removeChild(diceImage);
    }
}

// Initialize event listeners
let diceElement = document.getElementById("diceImage");
diceElement.addEventListener("dragstart", (event) => drag(event));
diceElement.draggable = true;

let diceRollingArea = document.getElementById("diceRollingArea");
diceRollingArea.addEventListener("drop", (event) => drop(event));
diceRollingArea.addEventListener("dragover", (event) => allowDrop(event));

// Update calculateMarks div styling (for positioning and color)
const calculateMarksDiv = document.getElementById("calculateMarks");
calculateMarksDiv.style.position = 'relevant';
calculateMarksDiv.style.fontSize = '25px';
calculateMarksDiv.style.display = 'none';  // Initially hidden 
// calculateMarksDiv.style.top = '10px';
// calculateMarksDiv.style.right = '50px';
// calculateMarksDiv.style.height = '25px';
// calculateMarksDiv.style.padding = '10px';
// calculateMarksDiv.style.borderRadius = '5px';
// calculateMarksDiv.style.zIndex = '10';     // Ensure it's on top of other elements