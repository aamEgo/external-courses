function cloneObject(object) {
    var newObject = {};
    for (var key in object) {
        var value = object[key];
        newObject[key] = value;
    }
    return newObject;
}

function test() {
    var testObj = {name: 'Oleg', age: 22, male: true};
    var newObject = cloneObject(testObj);
    console.info(newObject);
    console.info(testObj == newObject);
}

test();