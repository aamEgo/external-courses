function printObject(obj) {
    for (var key in obj) {
        var value = obj[key];
        console.info(key + ' - ' + value);
    }
}

function test() {
    var testObj = {name: 'Oleg', age: 22, male: true};
    printObject(testObj);
}

test();