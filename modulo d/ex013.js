var dia = new Date();
//var diaAtual = dia.getDay();
var diaAtual = 6;
switch (diaAtual){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta-Feira');
        break;
    case 4:
        console.log('Quinta-Feira');
        break;
    case 5:
        console.log('Sexta-Feira');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Erro Dia nao existente');
}
