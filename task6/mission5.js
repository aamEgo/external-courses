function map(array, cb) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
        result.push(cb(array[i], i, array));
    }
    return result;
}

function test() {
    var arr = [6, 6, 1, 4, 3, 2, 6];
    console.info(map(arr, value => {
        return value * 2;
    }));
    console.info(arr.map(value => {
        return value * 2;
    }));
}

test();