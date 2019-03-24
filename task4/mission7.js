const CONTINUE = '...'

function cutString(str, count) {
    if (str.length > count)
        str = (str.substr(0,count-CONTINUE.length)+CONTINUE);
    return str;
}

function test() {
    console.info(cutString('mission6',14));
    console.info(cutString('external-courses>node task4/mission6',14));
}

test();