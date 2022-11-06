const array = [1, 2, 3, 4, 5, 6];

const rubahArray = (index, array) => {
    array[1] = index;
}

rubahArray(4, array);

console.log(array);
