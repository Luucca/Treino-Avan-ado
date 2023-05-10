var all = document.querySelector('.tell')
all.addEventListener('click', Contar)

 function Contar(){

//-------------------------------------------------
  var pri = document.querySelector('.start')
  var seg = document.querySelector('.end')
  var ter = document.querySelector('.steps')

//------------------------------------------------
var text = document.querySelector('.text')


  var número = Number(pri.value)
  var steps = Number(ter.value)
  var end = Number(seg.value)

  while ( número <= end) {
    text.innerHTML += `Passo ${número}`
    número = número + steps;
  }
}