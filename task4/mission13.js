function randValue() {
    var rand = 0 - 0.5 + Math.random() * (100 + 1);
    return rand;
}

function test() {
    console.info(randValue());
}

test();
