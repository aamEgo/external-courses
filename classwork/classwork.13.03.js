function createUser(name, age) {
    return {name: name, age: age};
}

function main(){
    var users = [];
    //ex2
    for (var i = 0; i < 6; ++i){
        users[i] = createUser('name'+i,18+i);
    }
    users.push(createUser('Mary',18));
    //ex3
    var favoriteUser = null;
    users.forEach((userObject)=>{
        if (userObject.age == 23){
            userObject.age = 25;
            userObject.name = 'NEO';
            userObject.salary = 30000;
            favoriteUser = userObject;
            return;
        }
    });
    //ex4
    users.forEach((userObject)=>{
        if (userObject.name == 'Mary'){
            userObject.husband = favoriteUser;
            delete userObject.age;
        }
    });
    //test
    console.info(users);
}

main();