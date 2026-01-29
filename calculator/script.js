const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("themeToggle");

let currentInput = "";

// Calculator Logic
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "C") {
            currentInput = "";
            display.value = "";
        }
        else if (value === "=") {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Dark/Light Mode Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
