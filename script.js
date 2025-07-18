let count = 0;

function updateCount() {
  document.getElementById("count").innerText = count;
}

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  updateCount();
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  updateCount();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  updateCount();
});
