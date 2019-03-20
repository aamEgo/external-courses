function trim(str) {
    var str = str.split('');
    if (str[0] == ' ') {
        str.splice(0, 1);
    }
    if (str[str.length - 1] == ' ') {
        str.splice([str.length - 1], 1);
    }
    return str.join('');
}

function test() {
    console.info(trim(' ss '));
}

test();
