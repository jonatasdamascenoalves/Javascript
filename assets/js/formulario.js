function mostrar()
{
var nome = document.getElementById("nome").value

var Idade = document.getElementById("Idade").value

var nascimento = document.getElementById("nascimento").value
/*2020/02/27*/
/*27/02/2020*/
var dia = nascimento.substring(8,10)
var mes = nascimento.substring(5,7)
var ano = nascimento.substring(0,4)
nascimento = dia+"/"+mes+"/"+ano

var email = document.getElementById("email").value

var observacao = document.getElementById("Observacao").value

var Estados = document.getElementById("Estados").value

var sexo = document.querySelector("input[name='sexo']:checked").value

var Valerefeicao = document.getElementById("Valerefeicao").checked
if(Valerefeicao==true)
    {Valerefeicao="Sim"}
else 
    {Valerefeicao="Não"}

var Valetransporte=document.getElementById("Valetransportes").checked
if(Valetransporte==true)
{Valetransporte="Sim eu quero"}
else
{Valetransporte="não quero"}

alert(nome+"\n"+Idade+"\n"+nascimento+"\n"+email+"\n"+observacao+"\n"+Estados+"\n"+sexo+"\n"+Valerefeicao+"\n"+Valetransporte)
}
