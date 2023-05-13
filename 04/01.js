var Input = document.querySelector('.Number')

var Button = document.querySelector('.Button')
Button.addEventListener('click', Adicionar)

var List = document.querySelector('.List')


 let Valores = [ ]
 function Adicionar(){

   var Valor = Number(Input.value)
   Valores.push(Valor)
   Input.value = null
   return List.innerHTML += `<option value="numero">O valor ${Valor} Foi adicionado</option>`

}
//--------------------------------------------------------------------------------------------------------

var Resultado = document.querySelector('.Resultado')
Resultado.addEventListener('click', Mostrar)

 function Mostrar(){
  
  var Text = document.querySelector('.Text')
  Text.innerHTML = `Ao todo, foram ${Valores.length} Cadastrados.`
 //---------------------------------------------------------------------- 
 let Maior = Valores[0]
 let Menor = Valores[0]
   for (let Posição in Valores){
    if (Valores[Posição] >= Maior){
      Maior = Valores[Posição]
    }
    //--------------------------------
    if ( Valores[Posição] <= Menor){
      Menor = Valores[Posição]
    }
   }
   Text.innerHTML += `O Maior número foi ${ Maior }`
   Text.innerHTML += `O Menor número foi ${ Menor }`

}
   





