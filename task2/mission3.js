function isEvenValue(val){
    return val % 2 == 0 ? true : false;
}

function countValues(arr){
    var zeroNum = 0;
    var oddNum = 0;
    var evenNum = 0;
    for (var val of arr){
        if (val == 0) {
            ++zeroNum;
            continue;
        }
        isEvenValue(val) ? ++evenNum : ++oddNum;
    }
    return [evenNum,oddNum,zeroNum];
}

function test(){
    console.info(countValues([1,2,3,4]));
    console.info(countValues([1,2,3,0,5,6,7]));
}

test();