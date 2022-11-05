function sumNumber(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;

}


console.log(sumNumber(1, 2, 3, 4, 5, 6));