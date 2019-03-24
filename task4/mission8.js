function upperWord(wordStr) {
    wordStr = wordStr.split('');
    wordStr[0] = wordStr[0].toUpperCase();
    return wordStr.join('');
}

function toLowerCamelCase(str) {
    var result = '';
    str.split(' ').forEach((word,index)=>{
        if (index == 0)
            result+= word;
        result+=upperWord(word);
    });
    return result;
}

function test() {
    console.info(toLowerCamelCase('give me lower camel case'));
}

test();