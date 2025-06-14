// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// Helper function to safely get number input
function getInputValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    return isNaN(value) ? 0 : value;
}

// Event listeners for each button
document.getElementById('add').addEventListener('click', function() {
    const number1 = getInputValue('number1');
    const number2 = getInputValue('number2');
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = getInputValue('number1');
    const number2 = getInputValue('number2');
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = getInputValue('number1');
    const number2 = getInputValue('number2');
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = getInputValue('number1');
    const number2 = getInputValue('number2');

    const result = number2 === 0
        ? "Error: Cannot divide by 0"
        : divide(number1, number2);

    document.getElementById('calculation-result').textContent = result;
});
