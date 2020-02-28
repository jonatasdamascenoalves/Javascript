var textoH1 = document.getElementById("Titulo")
alert(textoH1.textContent)
textoH1.className="vermelha"
textoH1.textContent="Texto Alterado pelo JS"

var textoH2 = document.getElementById("Subtitulo")
alert(textoH2.textContent)

var textoLi = document.getElementsByTagName("li")[3]
alert(textoLi.textContent)

var textoclassverde = document.getElementsByClassName("verde")
for (var posicao = 0; posicao<textoclassverde.length; posicao++) {
    alert(textoclassverde[posicao].textContent)
}
var textoLiverde = document.querySelectorAll(".verde")
for (var i = 0; i<textoLiverde.length; i++) {
    alert("conteudo pego queryselection-" +textoLiverde[i].textContent)
}
// 