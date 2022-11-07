

let json = '{ "name": "Yoda", "age": 20 }';


try {
    let object = JSON.parse(json);
    console.log(object.name);
    console.log(object.age);
    // console.log(object.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}