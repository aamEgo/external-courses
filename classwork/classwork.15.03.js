var User = {
    getAge: function () {
        return this.age;
    },
    getName: function () {
        return this.name;
    },
    changeAge: function (age) {
        this.age = age;
    },
    changeName: function (name) {
        this.name = name;
    }
};

var Employee = {
    promote: function (jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    },
    getJobTitle: function () {
        return this.jobTitle;
    },
    getSalary: function () {
        return this.salary;
    }
};

function test() {
    var employeeUser = Object.assign({}, User, Employee);
    var employee1 = Object.create(employeeUser);
    var employee2 = Object.create(employeeUser);
    var employee3 = Object.create(employeeUser);
    var employee4 = Object.create(employeeUser);
    employee1.changeName('Mary');
    employee2.changeAge(30);
    employee3.promote('Senior Developer', 100500);
    console.info(employee1);
    console.info(employee2);
    console.info(employee3);
    console.info(employee4);
}

test();