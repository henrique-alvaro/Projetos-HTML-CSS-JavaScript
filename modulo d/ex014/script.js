function carregar(){
    var msg = document.getElementById('mensagem');
    var img = document.getElementById('imagem');
    var date = new Date();
    var hora = date.getHours();
    msg.innerHTML = `Agora Sao ${hora} horas`;
    if (hora >= 6 && hora <= 12){
        //Bom Dia
        img.src = 'manha.jpg'
        document.body.style.background = '#87CEFA'
    }else if (hora >= 13 && hora <= 18){
        //Boa Tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'FF8C00'
    }else{
        //Boa Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#483D8B'
    }
}