function calculator(a, b, op) {
    const calc = function (a, b, op) { return op(a, b); }

    const add = function (a, b) { return a + b; }
    const subtract = function (a, b) { return a - b; }
    const multiply = function (a, b) { return a * b; }
    const divide = function (a, b) { return a / b; }

    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }
}

console.log(calculator(2, 4, '+'));
console.log(calculator(3, 3, '/'));
console.log(calculator(18, -1, '*'));