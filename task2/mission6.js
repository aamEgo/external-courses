var MAX_VALUE = 1000;

function checkSimpleValue(value) {
    if (value > MAX_VALUE){
        console.info('Введите число меньше ' +MAX_VALUE);
    }
    var resultMessage = 'Число '+value+(isSimpleValue(value) ? ' - простое число' : ' - составное число');
    console.info(resultMessage);
}

function isSimpleValue(val){
    for (var divider = 2; divider <= Math.sqrt(val); ++divider){
        if ( val % divider == 0)
            return false;
    }
    return true;
}


function test() {
    checkSimpleValue(13);
    checkSimpleValue(14);
}

test();