
const eksekusi = (resolve, reject) => {
    let mechine = false;

    if (mechine) {
        resolve("kopi teh berhasil dibuat");
    } else {
        reject("maap gan, rusak ey");
    }
}

const makeCoffee = () => {
    return new Promise(eksekusi);
}

const kopi = makeCoffee()
console.log(kopi);