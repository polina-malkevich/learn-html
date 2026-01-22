    // 1. SELECT ELEMENTS
        // We grab HTML elements by their ID so JS can talk to them.
        const counterElement = document.getElementById('counter');
        const buttonElement = document.getElementById('actionBtn');
        const messageElement = document.getElementById('message');
        const cardElement = document.getElementById('mainCard');
        const maxElement = document.getElementById('maxNumberInput');

        // 2. DEFINE STATE
        // Variables to keep track of data.
        let count = 0;
        const colors = ['#ffffff', '#fff0f0', '#f0fff4', '#f0f8ff', '#fffaf0'];

        // 3. DEFINE FUNCTIONS
        // A function is a block of code designed to perform a particular task.
        function updateCounter() {
            // Increment the count variable
            let x = maxElement.value;
            count = getRandomInt(0, x);
            // Update the HTML text
            counterElement.textContent = count;
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function updateBackground() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            cardElement.style.backgroundColor = colors[randomIndex];
        }

        // 4. ADD EVENT LISTENERS
        // This waits for the user to click the button, then runs our code.
        buttonElement.addEventListener('click', function () {
            updateCounter();
            updateBackground();
            
            // Log to the browser console (useful for debugging)
            console.log("Button clicked! Current count: " + count);
        });