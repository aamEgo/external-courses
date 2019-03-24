function insertString(sourceStr,destStr,wordNum){
    var words = sourceStr.split(' ');
    words.splice(wordNum,0,destStr);
    return words.join(' ');
}

function test() {
    console.info(insertString('insert string here please','str',3));
}

test();