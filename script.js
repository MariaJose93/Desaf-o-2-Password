function verificar(){
    n1=document.getElementById("password1").value;
    n2=document.getElementById("password2").value;
    n3=document.getElementById("password3").value;

    if (n1 === "9" && n2 === "1" && n3 === "1") {
        var respuesta = document.querySelector('.resultado')
        respuesta.innerHTML = "Password 1 correcto";
        
    } else if (n1 === "7" && n2 === "1" && n3 === "4") {
        var respuesta = document.querySelector('.resultado');
        respuesta.innerHTML = "Password 2 correcto"; 
        
    } else {
        var respuesta = document.querySelector('.resultado');
        respuesta.innerHTML = "Password incorrecto";
        
    }
};