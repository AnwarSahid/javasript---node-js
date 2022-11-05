const coffeeStock = require('./state')

// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");


console.log(coffeeStock);


const makeCoffe = (namaKopi, beratKopi) => {

    if (coffeeStock[namaKopi] >= beratKopi) {
        console.log("kopi berhasil dibuat");
    } else {
        console.log("kobi habis ngab");
    }

}


makeCoffe("robusta", 80);

