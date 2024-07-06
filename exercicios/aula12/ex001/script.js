var msg = window.document.getElementById('msg')
var corpo = window.document.querySelector('body')
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

if(hora < 12) {
    msg.innerHTML = '<p></p>'
}