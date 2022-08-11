var idade  =12;
console.log(`Voce tem ${idade} Anos`);
if (idade > 18){
    console.log('Voto Obrigatorio');
} else if(idade >= 16 && idade < 18){
    console.log('Voto Opcional');
} else{
    console.log('Voce ainda nao pode votar');
}