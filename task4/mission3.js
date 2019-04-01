function trim(str) {
    if (str[0] == ' ') {
        str = str.slice(1);
    }
    if (str[str.length - 1] == ' ') {
        str = str.slice(0,-1);
    }
    return str;
}

function test() {
    console.info(trim(' ssd '));
}

test();
