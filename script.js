const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// start button logic
startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);

  // logic for disable one btn at a time
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

// stop button logic
stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = "";

  // logic for disable one btn at a time
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// handle up keypress logic
function handleUp(e) {
  logDiv.textContent = `Key ${e.key} pressed down`;
  stateDiv.textContent = `Key is down`;
}

// handle down keypress logic
function handleDown(e) {
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = `Key is up`;
}
