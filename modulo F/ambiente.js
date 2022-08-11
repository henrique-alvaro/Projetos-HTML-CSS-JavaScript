let num = [9, 8, 6, 4, 2]
num.push(1)
num.sort()
console.log(`Quantidade P° ${num.length}`);
console.log(`Ordenados ${num}`);

/*
for (let pos=0; pos < num.length; pos++){
    console.log(`Posiçao ${pos} tem valor ${num[pos]}`);
}

for(let pos in num){
    console.log(`posicao ${pos} valor ${num[pos]}`);
}
*/

let pos = num.indexOf(5);
if(pos == -1){
    console.log('nao tem');
}else{
    console.log('Tem');
}