function checkExistDuplicates(arr) {
    for (var i = 0; i < arr.length; ++i){
        for (var j = 0; j < arr.length; ++j){
            if (j == i)
                continue;
            if (arr[i] == arr[j])
                return true;
        }
    }
    return false;
}


function test(){
    console.info(checkExistDuplicates([1,2,0,4]));
    console.info(checkExistDuplicates([2,1,2,0,4,5,1,44]));
}

test();