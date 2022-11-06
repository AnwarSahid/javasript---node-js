
function recursive(iterasi) {

    // console.log(iterasi);
    let total = 1;
    if (iterasi > 0) {
        total = iterasi * recursive(iterasi - 1)
    }

    return total;
}

console.log(recursive(4))