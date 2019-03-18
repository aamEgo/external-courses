function hasPropertyObject(property, object) {
    return object.hasOwnProperty(property);
}

function test() {
    var testObj = {name: 'Oleg', age: 22, male: true};
    console.info(hasPropertyObject('name', testObj));
    console.info(hasPropertyObject('driverLicense', testObj));
}

test();