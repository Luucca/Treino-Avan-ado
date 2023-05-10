var button = document.querySelector('.button')
button.addEventListener('click', Mostrar)   
function Mostrar(){


   var input = document.querySelector('.number')
   var número = Number(input.value)

 var texto = document.querySelector('.text')

   switch(número){
    case 1:
        var text = String('1 x 1 = 1')
      break;
    case 2:
        var text = String('2 x 2 = 4')
      break;
    case 3:
        var text = String('3 x 3 = 9')
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      break;      
  }
  texto.innerHTML = text
}