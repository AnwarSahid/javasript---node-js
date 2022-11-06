
import { coffeeStock, isCoffeeMachineReady } from './state.js';


// const { coffeeStock, isCoffeeMachineReady } = require('./state')


// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");


// console.log(isCoffeeMachineReady);


// const makeCoffe = (namaKopi, beratKopi) => {

//     if (coffeeStock[namaKopi] >= beratKopi && isCoffeeMachineReady) {
//         console.log("kopi berhasil dibuat");
//     } else {
//         console.log("kobi habis ngab");
//     }

// }


// makeCoffe("robusta", 80);

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

console.log(isCoffeeMachineReady);
displayStock(coffeeStock);

