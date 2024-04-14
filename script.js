const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

// Replace with your target duration in seconds
const targetDuration = 100800;
let startTime = Date.now();  // Capture current time in milliseconds

const clock = setInterval(function time() {
  let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Elapsed time in seconds
  let remainingTime = targetDuration - elapsedTime;

  if (remainingTime <= 0) {
    clearInterval(clock); // Stop the timer when it reaches zero
    // Add logic to handle timer completion (e.g., alert)
    return;
  }

  let hours = Math.floor(remainingTime / 3600);
  let minutes = Math.floor((remainingTime % 3600) / 60);
  let seconds = remainingTime % 60;

  hour.textContent = hours.toString().padStart(2, '0'); // Pad hours with leading zero
  minute.innerText = minutes.toString().padStart(2, '0');
  second.innerText = seconds.toString().padStart(2, '0');
})