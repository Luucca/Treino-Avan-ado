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

  var date = new Date()
  var ano = date.getFullYear()

  if(idade <=0 || idade >=2023){
    alert('Informe uma idade valida!')
    text.innerHTML=''
  }

  text.innerHTML = `Uma pessoa com ${idade} anos nascida em ${data} do sexo ${sexo}, está assim hoje:`

   
}
