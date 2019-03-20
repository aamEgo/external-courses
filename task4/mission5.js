String.prototype.isExistSubstring = function (substr) {
    return this.indexOf(substr) == -1 ? false : true;
}

function test() {
    console.info('xers'.isExistSubstring('x'));
    console.info('xers'.isExistSubstring('w'));
}

test();