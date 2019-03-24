function countSymDistribution(str) {
    var result = {};
    str.split('').forEach(sym => {
        result[sym] = result.hasOwnProperty(sym) ? ++result[sym] : 1;
    })
    return result;
}

function test() {
    console.info(countSymDistribution('hdrsthiohjs'));
}

test();