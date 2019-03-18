function deepCloneObject(object) {
    var newObject = {};
    for (var key in object) {
        var value = object[key];
        typeof value == 'object' ? newObject[key] = deepCloneObject(value) : newObject[key] = value;
    }
    return newObject;
}

function test() {
    var myInfo = {
        name: 'Oleg',
        age: 22,
        male: true,
        driverLicense: {number: 'AABBCC33', categories: {M: true, A1: true, B: true},}
    };
    var newMyInfo = deepCloneObject(myInfo);
    console.info(newMyInfo);
    console.info(myInfo == newMyInfo);
    console.info(myInfo.driverLicense == newMyInfo.driverLicense);
    console.info(myInfo.driverLicense.categories == newMyInfo.driverLicense.categories);
}

test();