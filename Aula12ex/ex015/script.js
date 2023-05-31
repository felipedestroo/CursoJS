function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 4){
                // Bebe
                img.setAttribute('src', 'bebe-m.jpeg')
            } else if (idade >= 4 && idade < 11) {
                // Crianca
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4){
                // Bebe
                img.setAttribute('src', 'bebe-f.jpeg')
            } else if (idade >= 4 && idade < 11) {
                // Crianca
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulta-f.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
        res.appendChild(img)
        img.style.paddingTop ='15px'
    }
}