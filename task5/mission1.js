var calculator = {
    result: 0,
    add: function (val) {
        val = typeof val == 'number' ? val : 0;
        var self = this;
        var f = function (arg) {
            self.result += arg;
            return f;
        }
        return f(val);
    },
    subtract: function (val) {
        val = typeof val == 'number' ? val : 0;
        var self = this;
        var f = function (arg) {
            self.result -= arg;
            return f;
        }
        return f(val);
    },
    divide: function (val) {
        val = typeof val == 'number' ? val : 0;
        var self = this;
        var f = function (arg) {
            self.result /= arg;
            return f;
        }
        return f(val);
    },
    multiply: function (val) {
        val = typeof val == 'number' ? val : 0;
        var self = this;
        var f = function (arg) {
            self.result *= arg;
            return f;
        }
        return f(val);
    },


    getResult: function () {
        return this.result;
    },
    reset: function () {
        this.result = 0;
    },

}

function test() {
    calculator.add(0)(3)(4)(10);//17
    console.info(calculator.getResult());
    calculator.reset();
    calculator.subtract(3);//14
    console.info(calculator.getResult());
    calculator.divide(7)(1);//2
    console.info(calculator.getResult());
    calculator.multiply(6)(14);
    console.info(calculator.getResult());
}

test();