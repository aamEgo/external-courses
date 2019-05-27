function Calculator() {
    var result = 0;

    function add(val) {
        val = typeof val === 'number' ? val : 0;
        result += val;
        return this;
    }

    function subtract(val) {
        val = typeof val === 'number' ? val : 0;
        result -= val;
        return this;
    }

    function divide(val) {
        val = typeof val === 'number' ? val : 0;
        result /= val;
        return this;
    }

    function multiply(val) {
        val = typeof val === 'number' ? val : 0;
        result *= val;
        return this;
    }

    function setState(val) {
        result = val;
    }

    function getResult() {
        return result;
    }

    function reset() {
        result = 0;
        return this;
    }

    function fetchData(cb) {
        cb.call(this);
    }

    return {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,

        setState: setState,
        getResult: getResult,
        reset: reset,
        fetchData: fetchData,
    }

}

function test() {
    var calculator = Calculator();
    const result = calculator.add(100)
        .multiply(2)
        .divide(20)
        .reset()
        .subtract(1)
        .getResult();
    console.log(result); //-1
    calculator.reset();
    console.log(calculator.getResult()); // 0
    calculator.setState(1);
    console.log(calculator.getResult()); // 1

    calculator.fetchData(function () {
        setTimeout(() => {
            this.setState(500);
            console.log(this.getResult());
        }, 1000);
    });
}

test();