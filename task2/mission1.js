function checkNumberOrString(val){
    var typeOfVal = typeof val;
    if (typeOfVal == 'string' || typeOfVal == 'number')
        return typeOfVal;
}

function test(){
    console.info(checkNumberOrString('aa'));
    console.info(checkNumberOrString(4));
    console.info(checkNumberOrString(true));
}
test();