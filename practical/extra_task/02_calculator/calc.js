function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    let result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    let result = num1 - num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    let result = num1 * num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    if (num2 === 0) {
        alert('Division by zero is not allowed');
        return;
    }

    let result = num1 / num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}
