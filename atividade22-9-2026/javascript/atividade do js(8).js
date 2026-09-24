
{
function atv8(){
    let autenticarouvalidar=prompt("validar senha ou autenticar? false pra autenticar true pra validar")
    if(autenticarouvalidar==="true")
        {validar()}
    else
        {autenticar()}
    
    
    



}

function validar(){
    let validarsenha=prompt("escreva a senha")
    if(validarsenha.length<5){
        alert("senha muito curta");
        validar()
    }
    else{
     autenticar(validarsenha)}
}

function autenticar(validarsenha){
    
   
    let flag=true
    while(flag==true){
        let senha=prompt("dijite a senha novamente")
        if(senha===validarsenha){
            alert("senha correta")
            flag=false
        }
        else{
            alert("senha incorreta");
            
        }
    }
}
}





