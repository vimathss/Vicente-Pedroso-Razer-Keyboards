

/*JAVA SCRIPT USADO PARA O CARROSEL AUTOMATICO */
var radio = document.querySelector('.manual-btn')  /*variaveis*/
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => { /*Tempo de duração de cada imagem*/
    proximaImg()
}, 3000)

function proximaImg(){  /*Função que conta a quantidade de imagens*/
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}

