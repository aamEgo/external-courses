function randValue() {
    var rand =  Math.random() * (100 + 1);
    return rand;
}

function test() {
    console.info(randValue());
}

test();
