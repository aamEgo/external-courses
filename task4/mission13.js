function randValue() {
    var rand =  (Math.random() * 100);
    return rand;
}

function test() {
    console.info(randValue());
}

test();
