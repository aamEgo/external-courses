function slice(arr, begin, end) {
    var result = [];
    begin = begin ? begin : 0;
    end = end ? end : arr.length - 1;
    if (begin < 0 || end < 0) {
        begin = arr.length - 1 - begin;
        end = arr.length - 1 - end;
    }
    for (var i = begin; i < end; ++i) {
        result.push(arr[i]);
    }
    return result;
}

function test() {
    var arr = ['hsdm', 'long', 'short', 'middle', 'a', 'b', 'ct'];
    var newArray = slice(arr, -2, 1);

    var sliceOriginal = arr.slice(-2, -1);
    console.info(newArray);
    console.info(sliceOriginal);
}

test();