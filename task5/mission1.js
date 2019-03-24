function Calculator() {
    var result = 0;

    function add(val) {
        val = typeof val == 'number' ? val : 0;
        result += val;
        return add;
    }

    function subtract(val) {
        val = typeof val == 'number' ? val : 0;
        result -= val;
        return subtract;
    }

    function divide(val) {
        val = typeof val == 'number' ? val : 0;
        result /= val;
        return divide;
    }

    function multiply(val) {
        val = typeof val == 'number' ? val : 0;
        result *= val;
        return multiply;
    }

    function getResult() {
        return result;
    }

    function reset() {
        result = 0;
    }

    return {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,

        getResult: getResult,
        reset: reset,
    }

}

function test() {
    var calculator = Calculator();
    calculator.add('a')(3)(4)(10);//17
    console.info(calculator.getResult());
    calculator.subtract(3);//14
    console.info(calculator.getResult());
    calculator.divide(7)(1);//22
    console.info(calculator.getResult());
    calculator.multiply(6)(14);
    console.info(calculator.getResult());
}

test();