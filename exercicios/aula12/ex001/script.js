function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    msg.innerHTML = `<p>Agora são ${hora} horas e ${minuto} minutos</p>`

    if(hora >= 0 && hora < 12) {
        window.document.body.style.background = '#f0c058'
        img.src = 'imagens/foto-manha.jpg'
    }else if(hora >= 12 && hora < 18) {
        window.document.body.style.background = '#ee9745'
        img.src = 'imagens/foto-tarde.jpg'
    }else {
        window.document.body.style.background = '#0a082c'
        img.src = 'imagens/foto-noite.jpg'
    }
}