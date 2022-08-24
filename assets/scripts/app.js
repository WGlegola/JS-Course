const defaultResult = 0;

let currentResult = defaultResult;

function add() {
  currentResult += userInput.value;

  outputResult(currentResult, "");
}

addBtn.addEventListened("click", add);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error\noccured";
