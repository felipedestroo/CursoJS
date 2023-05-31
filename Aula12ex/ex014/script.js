function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`
        if(minutos < 10){
            msg.innerHTML = `Agora são <strong>${hora}:0${minutos}</strong>`
        }


    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#f8c957'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fc6e00'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#002c43'
    }

}
