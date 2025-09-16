
    // Get the input box (display)
let input = document.getElementById("inputBox");

// Get all buttons
let buttons = document.querySelectorAll("button");

// Variable to store expression
let expression = "";

// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if (value === "C") {
            // Clear all
            expression = "";
            input.value = "";
        }
        else if (value === "DEL") {
            // Delete last character
            expression = expression.slice(0, -1);
            input.value = expression;
        }
        else if (value === "=") {
            // Calculate expression
            try {
                expression = eval(expression).toString();
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else {
            // Append clicked button value
            expression += value;
            input.value = expression;
        }
    });
});
