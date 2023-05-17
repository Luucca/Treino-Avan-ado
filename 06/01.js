var buttonAdd = document.querySelector('.buttonAdd')
buttonAdd.addEventListener('click', Dados)

var List = document.querySelector('.List')    

     function Dados() {
      var inputAdd = document.querySelector('.inputAdd')
      var inputValor = String(inputAdd.value)
      List.innerHTML += ` <li><input type="checkbox">
                         <p>${ inputValor }</p>
                         <span class="material-symbols-outlined">
                         delete
                         </span></li> `
      

      
      
     

     }
 
  
 

 