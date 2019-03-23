function deepCloneObject(object) {
    var newObject = {};
    for (var key in object) {
        var value = object[key];
        newObject[key] = typeof value == 'object' ? deepCloneObject(value) : value;
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