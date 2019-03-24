function inverseMyString(str) {
    return str.split('').reverse().join('');
}

function test() {
    console.info(inverseMyString('mission10 completed'));
}

test();