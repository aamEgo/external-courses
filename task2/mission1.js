function checkNumberOrString(val){
    var result = '';
    var typeOfVal = typeof val;
    switch (typeOfVal){
        case 'number':
        case 'string':
            result = typeOfVal;
            break;
        default:
            result = undefined;
            break;
    }
    return result;
}

function test(){
    console.info(checkNumberOrString('aa'));
    console.info(checkNumberOrString(4));
    console.info(checkNumberOrString(true));
}
test();