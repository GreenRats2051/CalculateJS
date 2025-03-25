function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Ошибка: Деление на ноль!';
            }
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        default:
            result = 'Ошибка: Неверная операция!';
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
}