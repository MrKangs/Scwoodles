let level = 0;
let firstNumber, secondNumber, answer;
let currentQuestion = 0;
let correctAnswersCount = 0;
let userPosition = 1; // for Level 2
let diceRolling = false;
let correctAnswers = false;
let questionLimit = 10;
let counter = 10;
let boardLimit = 200;

function startGame(selectedLevel) {
    level = selectedLevel;
    counter = 0;
    currentQuestion = 0;
    correctAnswersCount = 0;
    correctAnswers = false;
    boardLimit = 200;
    document.getElementById("game").style.display = "block";
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("progress").textContent = "";
    document.getElementById("dice-section").style.display = "none"; // Hide dice until needed

    if (level === 2) {
        userPosition = 1;
        drawBoard();
    }

    nextQuestion();
}

function nextQuestion() {
    firstNumber = Math.floor(Math.random() * 10) + 1;
    secondNumber = Math.floor(Math.random() * 10) + 1;
    answer = firstNumber * secondNumber;

    if (level === 1) {
        const questionText = `There are ${firstNumber} boxes horizontally and ${secondNumber} boxes vertically. How many boxes are there in total?`;
        document.getElementById("question").textContent = questionText;
        drawBoxes(firstNumber, secondNumber);
    } else if (level === 2) {
        const questionText = `You are at position ${userPosition}. ${firstNumber} * ${secondNumber} = ?`;
        document.getElementById("question").textContent = questionText;
        document.getElementById("boxes-container").innerHTML = "";
    } else {
        const questionText = `${firstNumber} * ${secondNumber} = ?`;
        document.getElementById("question").textContent = questionText;
        document.getElementById("boxes-container").innerHTML = "";
    }
}

function drawBoxes(horizontal, vertical) {
    const container = document.getElementById("boxes-container");
    container.innerHTML = ""; // Clear previous boxes
    for (let i = 0; i < vertical; i++) {
        const row = document.createElement("div");
        row.classList.add("box-row");
        for (let j = 0; j < horizontal; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    counter++;
    if (userAnswer === answer) {
        correctAnswersCount++;
        correctAnswers = true;
        if (questionLimit == counter) {
            document.getElementById("answer").value = ""; // Clear the answer input
            return endGame();
        }
        document.getElementById("feedback").textContent = "Correct!";
        if (level === 2) {
            document.getElementById("dice-section").style.display = "block"; // Show dice button
        } else {
            nextQuestion();
        }
    } else {
        document.getElementById("feedback").textContent = "Incorrect!";
        correctAnswers = false;
        if (level === 2) {
            document.getElementById("dice-section").style.display = "block"; // Show dice button even on wrong answers
        }
    }
    document.getElementById("answer").value = ""; // Clear the answer input
}

function rollDice() {
    if (diceRolling) return; // Prevent multiple rolls at once
    diceRolling = true;
    const diceAnimation = document.getElementById("dice-animation");
    diceAnimation.classList.add("rolling"); // Start dice animation

    setTimeout(() => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById("feedback").textContent = `You rolled a ${diceRoll}.`;
        console.log(correctAnswers);
        if (correctAnswers) {
            moveForward(diceRoll);
        } else {
            moveBackward(diceRoll);
        }

        diceRolling = false;
        diceAnimation.classList.remove("rolling"); // Stop dice animation
        document.getElementById("dice-section").style.display = "none"; // Hide dice button until next question
        nextQuestion();
    }, 1500); // Simulate dice roll duration
}

function moveForward(diceRoll) {
    userPosition += diceRoll;
    if (userPosition > boardLimit) {
        userPosition = boardLimit; // Cap the position at boardLimit
        endGame();
    }
    drawBoard();
}

function moveBackward(diceRoll) {
    userPosition -= diceRoll;
    if (userPosition < 1) userPosition = 1; // Ensure position doesn't go below 1
    drawBoard();
}

function drawBoard() {
    const board = document.getElementById("game-board");
    board.innerHTML = "";

    for (let i = 1; i <= boardLimit; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (i === userPosition) {
            cell.textContent = "•"; // Represent the user as a dot
            cell.classList.add("user-position");
        } else {
            cell.textContent = i;
        }

        board.appendChild(cell);
    }
}

function endGame() {
    document.getElementById("game").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-score").textContent = `You answered ${correctAnswersCount} questions correctly!`;
}

function playAgain() {
    startGame(level);
}

function goBack() {
    document.getElementById("game").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
    correctAnswers = 0;
    currentQuestion = 0;
    userPosition = 1;
}
