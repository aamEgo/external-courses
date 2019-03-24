function upperWord(wordStr) {
    wordStr = wordStr.split('');
    wordStr[0] = wordStr[0].toUpperCase();
    return wordStr.join('');
}

function upperString(str) {
    var result = '';
    str.split(' ').forEach(word=>{
        result += upperWord(word)+' ';
    })
    return result;
}

function test(){
    console.info(upperString('up first symbols').trim());
}

test();