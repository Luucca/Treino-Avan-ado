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


  for (var valor = número;valor <= end ; valor = valor + steps){
    text.innerHTML=`Passo ${valor}`

  }
}