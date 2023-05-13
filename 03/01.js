var button = document.querySelector('.button')
button.addEventListener('click', Mostrar)   
function Mostrar(){

 var List = document.querySelector('.List')

 let Valores = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
 var Input = document.querySelector('.number')
 var Número = Number(Input.value)

 Input.value = null
 List.innerHTML = null

 for ( let Valor in Valores){
   for ( let Números = Número ; Números <= 10  ; Números ++)
    Soma = Número * Valor
    List.innerHTML += `<option value="number">${Número} x ${Valor} ${Soma}</option>`
 }
 
} 
/*
switch( Valores ){
  case 1:
    for ( var V01 = 1  ; V01 <= 10 ; V01 ++ ){
     Soma = Valores * V01
     List.innerHTML += `<option value="number">${ Valores } x ${V01} =${Soma} </option>`
    }
    break;
  case 2: 
    for (var V02 = 1  ; V02 <= 10 ; V02 ++ ){
    Soma02 = Valores * V02
    List.innerHTML += `<option value="number">${ Valores } x ${V02} =${Soma02} </option>`
   }
    break;
  case 3:
    for (var V03 = 1  ; V03 <= 10 ; V03 ++ ){
      Soma03 = Valores * V03
      List.innerHTML += `<option value="number">${ Valores } x ${V03} =${Soma03} </option>`
     }
    break;
  case 4:
    for (var V04 = 1  ; V04 <= 10 ; V04 ++ ){
      Soma04 = Valores * V04
      List.innerHTML += `<option value="number">${ Valores } x ${V04} =${Soma04} </option>`
     }
    break;
  case 5:
    for (var V05 = 1  ; V05 <= 10 ; V05 ++ ){
      Soma05 = Valores * V05
      List.innerHTML += `<option value="number">${ Valores } x ${V05} =${Soma05} </option>`
     }
    break;
  case 6:
    for (var V06 = 1  ; V06 <= 10 ; V06 ++ ){
      Soma06 = Valores * V06
      List.innerHTML += `<option value="number">${ Valores } x ${V06} =${Soma06} </option>`
     }
    break;
  case 7:
    for (var V07 = 1  ; V07 <= 10 ; V07 ++ ){
      Soma07 = Valores * V07
      List.innerHTML += `<option value="number">${ Valores } x ${V07} =${Soma07} </option>`
     }
    break;
  case 8:
    for (var V08 = 1  ; V08<= 10 ; V08 ++ ){
      Soma08 = Valores * V08
      List.innerHTML += `<option value="number">${ Valores } x ${V08} =${Soma08} </option>`
     }
    break;
  case 9:
    for (var V09 = 1  ; V09 <= 10 ; V09 ++ ){
      Soma09 = Valores * V09
      List.innerHTML += `<option value="number">${ Valores } x ${V09} =${Soma09} </option>`
     }
    break;
  case 10:
    for (var V10 = 1  ; V10 <= 10 ; V10 ++ ){
      Soma10 = Valores * V10
      List.innerHTML += `<option value="number">${ Valores } x ${V10} =${Soma10} </option>`
     }
    break;      
}
*/