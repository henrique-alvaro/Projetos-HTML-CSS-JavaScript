function verificar(){
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#resposta');

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente');
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homen';
            if (idade >=0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'bebeM.jpg');
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemM.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoM.jpg');
            }else{
                //idoso
                img.setAttribute('src', 'velhoM.jpg');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebeF.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemF.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoF.jpg');
            }else{
                //velho
                img.setAttribute('src', 'velhoF.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`;
        res.appendChild(img)
    }
}