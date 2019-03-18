function addPropertyIfNotExist(property, object) {
    if (!object.hasOwnProperty(property)) {
        object[property] = 'new';
    }
    return object;
}

function test() {
    var testObj = {name: 'Oleg', age: 22, male: true};
    console.info(addPropertyIfNotExist('name', testObj));
    console.info(addPropertyIfNotExist('driverLicense', testObj));
}

test();