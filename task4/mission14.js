function randInt(from, to) {
    var rand = from - 0.5 + Math.random() * (to - from + 1)
    rand = Math.round(rand);
    return rand;
}

function test() {
    console.info(randInt(1,2));
    console.info(randInt(1,122));
}

test();