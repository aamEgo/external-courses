function randValue() {
    var rand = Math.floor(Math.random() * 101);
    return rand;
}

function test() {
    console.info(randValue());
}

test();
