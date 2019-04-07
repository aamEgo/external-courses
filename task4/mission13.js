function randValue() {
    var rand = Math.floor(Math.random() * 100 + 1);
    return rand;
}

function test() {
    console.info(randValue());
}

test();
