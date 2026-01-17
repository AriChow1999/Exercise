const readline = require('readline-sync');

function getPower(sign) {
    if (sign === '*' || sign === '/') return 2;
    if (sign === '+' || sign === '-') return 1;
    return 0;
}

function main() {
    let formula = readline.question("Enter formula: ");

    let pieces = formula.match(/[0-9.]+|[a-zA-Z]+|[+\-*/()]/g);
    let finalExpression = [];
    let signStack = [];

    pieces.forEach(item => {
        if (!isNaN(item) || /[a-zA-Z]/.test(item)) {
            finalExpression.push(item);
        }
        else if (item === '(') {
            signStack.push('(');
        }
        else if (item === ')') {
            while (signStack.length > 0 && signStack[signStack.length - 1] !== '(') {
                finalExpression.push(signStack.pop());
            }
            signStack.pop();
        }
        else {
            while (signStack.length > 0 && getPower(signStack[signStack.length - 1]) >= getPower(item)) {
                finalExpression.push(signStack.pop());
            }
            signStack.push(item);
        }
    });

    while (signStack.length > 0) {
        finalExpression.push(signStack.pop());
    }

    const expression = finalExpression.join(" ");
    console.log("\nYour formula in Math Order (Postfix):");
    console.log(expression);


    return expression;
}

function evaluatePostfix(expression) {
    const stack = [];
    const tokens = expression.split(/\s+/);

    for (let token of tokens) {

        if (/[a-zA-Z]/.test(token)) {

            const value = Number(readline.question(`Enter value for ${token}: `));
            stack.push(value);
        }

        else if (!isNaN(token)) {
            stack.push(Number(token));
        }

        else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    return stack.pop();
}

const myPostfix = main();


const result = evaluatePostfix(myPostfix);
console.log(`\nResult: ${result}`);