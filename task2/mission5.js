function getMaxValue(arr){
    var maxValue = arr[0];
    for (var currentValue of arr){
        if (maxValue < currentValue)
            maxValue = currentValue;
    }
    return maxValue;
}

function test() {
    console.info(getMaxValue([1,2,1,0,4,8,1,3]));
}

test();