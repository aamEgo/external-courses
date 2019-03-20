function createEmptyObject() {
    return Object.create(null);
}

function test() {
    console.info(createEmptyObject());
}

test();