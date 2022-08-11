let num = document.getElementById('numero');
let lista = document.getElementById('tab');
let res = document.getElementById('saida');
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = '';
    }else{
        alert('valor invalido ou ja inserido na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar');
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos];
            if(valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`;
        res.innerHTML += `<p>Maior valor e ${maior}</p>`;
        res.innerHTML += `<p>Menor valor e ${menor}</p>`;
        res.innerHTML += `<p>A soma de todos os valores e ${soma}</p>`;
        res.innerHTML += `<p>Media de Todos valores e ${media}</p>`;
    }
}