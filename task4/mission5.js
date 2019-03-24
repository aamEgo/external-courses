function isExistSubstring(str,substr) {
    return str.indexOf(substr) == -1 ? false : true;
}

function test() {
    console.info(isExistSubstring('avadakedavra','ked'));
    console.info(isExistSubstring('xers','ww'));
}

test();