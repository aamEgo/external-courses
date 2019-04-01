function some(array, cb) {
    for (var i = 0; i < array.length; ++i) {
        if (cb(array[i], i, array))
            return true;
    }
    return false;
}

function test() {
    var arr = [1, 2, 3, 4, 5, 6];
    console.info(some(arr, val => val == 6));
    console.info(arr.some(val => val == 6));
}

test();