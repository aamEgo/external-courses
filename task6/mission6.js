function reduce(array, cb, initialValue) {
    var startIndex = initialValue ? 0 : 1;
    var previousValue = initialValue ? initialValue : array[0];
    for (var i = startIndex; i < array.length; ++i) {
        previousValue = cb(previousValue, array[i], i, array);
    }
    return previousValue;
}

function test() {
    var arr = [6, 2, 4, 5, 9, 1, 3];
    console.info(arr.reduce((currentArray, currentValue) => {
        if (currentValue > 4)
            currentArray.push(currentValue * 3);
        return currentArray;
    }, [8]));
    console.info(reduce(arr, (currentArray, currentValue) => {
        if (currentValue > 4)
            currentArray.push(currentValue * 3);
        return currentArray;
    }, [8]));
}

test();