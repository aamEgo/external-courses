function isEvenValue(val){
    return val % 2 == 0 ? true : false;
}

function countValues(arr){
    var result = [0,0,0];
    for (var val of arr){
        if (val == 0) {
            result[2]++;
            continue;
        }
        var indexOfResult = isEvenValue(val) == true ? 0 : 1;
        result[indexOfResult]++;
    }
    return result;
}

function test(){
    console.info(countValues([1,2,3,4]));
    console.info(countValues([1,2,3,0]));
}

test();