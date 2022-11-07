let badJson = '{ "name" : "anwar" }';

let object = JSON.parse(badJson);


try {
    if (!object.name) {
        throw new SyntaxError("'name' is required.");

    }

    errorCode;
    console.log("hallo dunia");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
