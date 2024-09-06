# JavaScript Dice Roller Game

- [Live Dice Roller Game](https://dicerolling-game.netlify.app/)

## Description:

This Dice Rolling Game is a simple yet interactive web-based game created using JavaScript, HTML, and CSS. The game allows users to drag and drop a virtual dice and track their scores based on the dice rolls. It is designed to be intuitive, engaging, and visually appealing with dynamic updates of the player's score after each roll.

### Game Features:

1.  Drag-and-Drop Dice Mechanism:

    - The user interacts with the dice by dragging and dropping it into a designated rolling area.
    - When the dice is dropped, a random dice roll result is generated.

2.  Rolling Mechanism:

    - Each time the dice is dragged and dropped, the dice image is updated with a randomly generated number between 1 and 20 (using a 20-sided dice).
    - The player can roll the dice up to 7 times, after which the game ends.

3.  Real-Time Score Tracking:

    - After every dice roll, the score is added to the total, and the individual rolls are displayed in a cumulative format (e.g., "8 + 5 + 12 = 25").
    - The score is displayed in a dynamic calculateMarks area positioned in the top-right corner of the dice-rolling area.

4.  Game Completion and Reset:

    - After 7 rolls, the game displays a game completion message with the total score in a red pop-up alert on the screen.
    - The game automatically resets after a brief delay (3 seconds), allowing the player to start a new game without refreshing the page.

5.  Stylized Interface:

    - The game elements are centered on the page, and the dice rolling area features a clean, colorful design.
    - The final score and roll updates are displayed prominently in the dice rolling area for easy viewing.
    - The game provides visual feedback in the form of a red-colored alert that shows the game finished before resetting.

6.  No Page Refresh:

    - The game smoothly resets after completion, with all game variables (roll count, total score, etc.) reset to zero, ensuring that the player can continue without needing to refresh the page.
