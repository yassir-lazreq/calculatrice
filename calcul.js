const calcDisplay = document.getElementById("calcDisplay");
const buttons = document.querySelectorAll(".calc-btn");
const calcEqual = document.getElementById("calcEqual");
const operations = ["+", "-", "*", "/", "."];
let equalClick = false;
let currentInput = "";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const valeur = button.getAttribute("data-value");
        if (equalClick) {
            currentInput = "";
            equalClick = false;
        }
        if (valeur === "C") {
            currentInput = "";
        } else if (operations.includes(valeur)) {
            if (currentInput !== "" && !operations.includes(currentInput.slice(-1))) {
                currentInput += valeur;

            } else if (currentInput == "" && operations.includes("-")) {
                currentInput += valeur;
            }
        } else {
            currentInput += valeur;
        }
        calcDisplay.value = currentInput;
    });

    calcEqual.addEventListener("click", () => {
        if (currentInput !== "" && !operations.includes(currentInput.slice(-1))) {
            currentInput = eval(currentInput);
            calcDisplay.value = currentInput;
            equalClick = true;
        } else {
            calcDisplay.value = 'error'
        }
    });
});
