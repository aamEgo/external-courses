function upperWord(wordStr) {
    wordStr = wordStr.split('');
    wordStr[0] = wordStr[0].toUpperCase();
    return wordStr.join('');
}

function toLowerCamelCase(str) {
    var result = str.split(' ').map((word, index) => {
        if (index == 0)
            return word;
        return upperWord(word);
    });
    return result.join('');
}

function test() {
    console.info(toLowerCamelCase('give me lower camel case'));
}

test();