function addWithFix(val1, val2) {
    return (val1 + val2).toFixed(3);
}

function test() {
    console.info(addWithFix(1.04521,1.09545));
}

test();