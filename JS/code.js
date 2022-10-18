let btnn = document.getElementById('modal-btn');
let modall = document.getElementById('modal-out');
let fechar = document.getElementById('close');

btnn.onclick = function(){
    modall.style.display = "flex";
}

fechar.onclick = function(){
    modall.style.display = "none"
}

function validateForm() {
    var A = document.forms["myForm"]["Aname"].value;
    if (A == "") {
      alert("Insira seu E-mail");
      return false;
    }
    
    var B = document.forms["myForm"]["Bname"].value;
    if (B.length <= 4) {
        alert("Sua senha deve contar no minimo 5 numeros");
        return false;
    }

    var C = document.forms["myForm"]["Cname"].value;
    if (C == "") {
        alert("Seu nome tem que ser adicionado");
        return false;
    }

    var D = document.forms["myForm"]["idade"].value;
    if (D <= 17 ) {
        alert("Não pode ser menor de 18 anos");
        return false;
    }
  }