
// Generating a random RGB color
function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Display the color in the color box
function displayColor() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = generateRandomColor();
}

// Display color options
function displayOptions() {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = generateRandomColor();
        option.addEventListener('click', checkAnswer);
        colorOptions.appendChild(option);
    }
}

// Check if the selected color is correct
function checkAnswer(event) {
    const selectedColor = event.target.style.backgroundColor;
    const correctColor = document.getElementById('colorOptions').style.backgroundColor; //change the colorOptions replace to 

    if (selectedColor === correctColor) {
        alert('Correct! Well done!');
        increaseScore();
        speak('Correct! Well done!');
    } else {
        alert('Incorrect! Try again.');
        speak('Incorrect! Try again.');
    }

    // Refresh the game
    displayColor();
    displayOptions();
}

// Increase the score
let score = 0;
function increaseScore() {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Text-to-speech function
function speak(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    synth.speak(utterance);
}

// Initial setup
displayColor();
displayOptions();

// Add event listener to start button
document.getElementById('startButton').addEventListener('click', () => {
    score = 0;
    document.getElementById('score').innerText = 'Score: 0';
    displayColor();
    displayOptions();
});
