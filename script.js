// Function to format date and time correctly
function formatDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}


function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatDateTime();
}

setInterval(updateTimer, 1000);

updateTimer();
