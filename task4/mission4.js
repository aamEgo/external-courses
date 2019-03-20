function upperFirstSymbol(str){
    str = str[0].toUpperCase()+str.slice(1);
    return str;
}

function test(){
    var testStr = 'testString';
    console.info(upperFirstSymbol(testStr));
}

test();