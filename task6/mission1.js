function slice(arr, begin, end) {
    var result = [];
    var arrLength = arr.length;
    //prevent undefined values
    begin = begin ? begin : 0;
    end = end ? end : arrLength;

    if (begin < 0)
        begin = arrLength + begin;
    if (end < 0)
        end = arrLength + end;
    for (var i = begin; i < end; ++i) {
        result.push(arr[i]);
    }
    return result;
}

function test() {
    var arr = ['hsdm', 'long', 'short', 'middle', 'a', 'b', 'ct'];
    var newArray = slice(arr, -2);
    var sliceOriginal = arr.slice(-2);
    console.info(newArray);
    console.info(sliceOriginal);
}

test();