function main() {
    var object = {};
    object.name = 'Oleg';
    object.age = 22;
    object.male = true;
    console.info(object);

    delete object.age;

    console.info(object);
}

main();