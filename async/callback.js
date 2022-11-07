

const orderCoffe = callback => {
    let coffe = null;

    console.log("coffe sedang dibuat");
    setTimeout(() => {
        // console.log("coffe selesai dibuat");
        coffe = "kopi udah jadi";
        callback(coffe);
    }, 3000);
    console.log("sedang dibuat");
    // return coffe;

}

orderCoffe(coffee => {
    console.log(coffee);
});