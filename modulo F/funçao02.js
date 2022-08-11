function somar(valor){
    let f = 1
    for(let c = valor; c > 1; c--){
        console.log(c)
        f *= c;
    }
    return f;
}

console.log(somar(10))
