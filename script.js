let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function sqrt() {
    display.value = Math.sqrt(display.value);
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace('%', '/100');

        let result = eval(expression);

        document.getElementById("history").innerHTML +=
            `<div>${display.value} = ${result}</div>`;

        display.value = result;
    }
    catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        append(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});

function toggleTheme() {
    document.body.classList.toggle("light");
}