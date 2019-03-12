function printArrayAndSize(arr){
    for (var val of arr){
        console.info(val);
    }
    var arrSize = arr.length;
    console.info('array size = '+arrSize);
}


function test() {
    var arr = [14,12,166,11,22];
    printArrayAndSize(arr);
}

test();