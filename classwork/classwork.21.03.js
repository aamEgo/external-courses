function User(name, age) {
    this.name = name;
    this.age = age;
    this.getAge = function () {
        return this.age;
    };
    this.getName = function () {
        return this.name;
    };
    this.changeName = function (name) {
        this.name = name;
    };
    this.changeAge = function (age) {
        this.age = age;
    };
}

function Employee(jobTitle, salary) {
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.fired = false;
    this.isFired = function () {
        return this.fired;
    };
    this.setFired = function () {
        this.fired = true;
    };
    this.promote = function (jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    };
    this.getJobTitle = function () {
        return this.jobTitle;
    };
    this.getSalary = function () {
        return this.salary;
    };
}

function test() {
    var usersArr = [
        new User('Dominic', 44),
        new User('John', 46),
        new User('Letty', 28),
        new User('Paul', 35),
        new User('Roman', 29),
        new User('Mary', 26)
    ];
    var employesArr = [
        new Employee('Driver', 35000),
        new Employee('Director', 220500),
        new Employee('Junior Developer', 40000),
        new Employee('Security Enginer', 70000),
        new Employee('Senior Developer', 100500),
        new Employee('Senior Developer', 100500)
    ];
    //find Mary
    var mary = usersArr.find(value => {
        if (value.getName() == 'Mary')
            return true;
    });
    //find peoples < 30 years
    var freshBlood = usersArr.filter(value => {
        if (value.getAge() < 30)
            return true;
    });
    console.info(freshBlood);

    //Wedding John and Mary
    usersArr.forEach(value => {
        if (value.getName() == 'John') {
            value.wife = mary;
            mary.husband = value;
        }
    });
    //Count average salary
    var avgSalary = 0;
    employesArr.forEach(value => {
        avgSalary += value.getSalary();
    });
    avgSalary /= employesArr.length;
    console.info(avgSalary);

    //Get all jobs title
    var jobTitles = Object.keys(employesArr.reduce((obj, item) => {
        obj[item.getJobTitle()] = null;
        return obj;
    }, {}));
    console.info(jobTitles);

    //Min and max salary
    var minSalary = Math.min(...employesArr.map(value => value.getSalary()));
    var maxSalary = Math.max(...employesArr.map(value => value.getSalary()));
    console.info(minSalary);
    console.info(maxSalary);

    //Firing director
    var directorEmployee = employesArr.find(value => {
        if (value.getJobTitle() == 'Director')
            return true;
    });
    directorEmployee.setFired();
    console.info(directorEmployee)
}

test();