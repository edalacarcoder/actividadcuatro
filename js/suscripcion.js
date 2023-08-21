// Comentarios

let btn_enviar, frm, txt; //Variables Formulario Suscripción

window.onload = ()=>{
    
  var btn_enviar = document.getElementById("btn_enviarsuscripcion");
  
  btn_enviar.addEventListener("click",enviar);
  //Acción de presion de botón
  
 }

function enviar(event){
  
  frm = document.getElementById("formulario");
  
    if(frm.checkValidity())
      
    {
      
      txt = document.getElementById("boletin");
      
      txt.value = "";
      
      alert("¡Gracias por registrarte, espera proximante el boletin de 3A Global!");
      
      event.preventDefault();  
      
    }
  
  }
  
//Recuperación de Información del Formulario de Suscripción.

document.querySelector("form")

  .addEventListener("submit", e => {
              
    e.preventDefault()
  
    const data = Object.fromEntries(
    
        new FormData(e.target) 
    
        )
    
    alert(JSON.stringify(data)

    )
                             
   }
          
 )
