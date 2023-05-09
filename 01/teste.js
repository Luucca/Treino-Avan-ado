var Masculino = document.querySelector('.Masculino')
Masculino.addEventListener('click', Ativo)
 
 function Ativo(){
   Masculino.setAttribute("checked", "")
   Feminino.removeAttribute("checked","")
   
   if(Masculino != false){
    sexo = 'Masculino'
   }
 }
//---------------------------------------------------------------
var Feminino = document.querySelector('.Feminino')
Feminino.addEventListener('click', Ativa)

  function Ativa(){
    Feminino.setAttribute("checked","")
    Masculino.removeAttribute("checked","")

    if(Feminino != false){
        sexo = 'Feminino'
    }
  }
//---------------------------------------------------------------
var button = document.querySelector('.button')
button.addEventListener('click', mostrar)

 function mostrar(){
  var text = document.querySelector('.text')
  var number = document.querySelector('.number') 
  var idade = Number(number.value)

  text.innerHTML = `Uma pessoa com ${idade} anos do sexo ${sexo}, está assim hoje:`

   
}
