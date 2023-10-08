
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = 'Current Time: ' + timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// You'll need JavaScript to handle routine display and filtering

