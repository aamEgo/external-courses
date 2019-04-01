function filter(array, cb) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
        if (cb(array[i], i, array))
            result.push(array[i]);
    }
    return result;
}

function test() {
    var arr = [6, 6, 1, 4, 3213, 222, 6];
    console.info(arr.filter(value => value >= 6));
    console.info(filter(arr, value => value >= 6));
}

test();