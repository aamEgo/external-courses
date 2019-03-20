function hasPropertyPrototype(propertyName, object) {
    return Object.getPrototypeOf(object).hasOwnProperty(propertyName);
}

function test() {
    var parentObject = {name: 'name'};
    var sonObject = Object.create(parentObject);
    sonObject['surname'] = 'ssss';
    console.info(hasPropertyPrototype('name', sonObject));
    console.info(hasPropertyPrototype('surname', sonObject));
}

test();