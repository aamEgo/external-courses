function every(array, cb) {
    for (var i = 0; i < array.length; ++i) {
        if (!cb(array[i], i, array))
            return false;
    }
    return true;
}

function test() {
    var arr = [6, 6, 6];
    console.info(every(arr, val => val == 6));
    console.info(arr.every(val => val == 6));
}

test();