function checkExistDuplicates(arr) {
    for (var i = 0; i < arr.length; ++i){
        for (var j = i+1; j < arr.length; ++j){
            if (arr[i] == arr[j])
                return true;
        }
    }
    return false;
}


function test(){
    console.info(checkExistDuplicates([1,2,0,4]));
    console.info(checkExistDuplicates([2,1,2,0,4,5,1,44]));
    console.info(checkExistDuplicates([1,2,3,4,5,7]));
}

test();