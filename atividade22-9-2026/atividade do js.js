function atv1(){
let base=Number(prompt("dijite a base"));
let altura=Number(prompt("dijite a altura"));
let area=base*altura;
alert(" a area e de "+area);
}

function atv2(){
    let ehPar=Number(prompt("dijite o numero"));
    ehPar=ehPar%2;
    console.log(ehPar);
    if(ehPar===0){
        alert("e par")}
    else{
        alert("e impar")}
}

function atv3(){
    let C=Number(prompt("dijite pra ser convertido pra farenhaite"));
    let F=(C*1.8)+32;
    console.log(F+" "+C);
    alert("deu "+F);
}

function atv4(){
let peso=Number(prompt("dijete o peso"));
let altura=Number(prompt("dijite a altura"));
let imc = peso/(altura*altura);
console.log(imc);
if(imc<18.5){alert("abaixo do peso");};
if(imc>25){alert("acima do peso");};
if(imc<25 &&imc>18.5){alert("peso ideal");};
}

function atv5(){
    alert("e um vetor de 3 numeros")
let vet=[Number(prompt("dijite o numero")),Number(prompt("dijite o numero")),Number(prompt("dijite o numero")),]
let soma=vet[0]+vet[1]+vet[2]
console.log(soma);
alert("deu "+soma)
}

function atv6(){
let pessoa={ nome:prompt("nome"), idade: prompt("idade"), clt: prompt("CLT")}
alert("Olá, meu nome é "+pessoa.nome +" tenho "+pessoa.idade +" anos e trabalho como "+pessoa.clt )
}

function atv7(){
let pb=Number(prompt("indique o preso"))
let desconto= Number(prompt("indique o desconto"))
let total= pb-((pb/100)*desconto)
alert("deu o total "+total)
}

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

function atv9(){
let notas={ nome: prompt("dijite o nome") ,notas:[Number(prompt("dijite a nota da prova 1")),Number(prompt("dijite a nota da prova 2")),Number(prompt("dijite a nota da prova 3"))],}

notas.notas=notas.notas[0]+notas.notas[1]+notas.notas[2]/3
console.log(notas)
if(notas.notas>=60){
    alert("aprovado")
}
else{
    alert("reprovado")
}

}

function atv0(){
    let totalaprovados=0

    let aluno1si= false;let aluno2si= false;let aluno3si= false;let aluno4si=false
    let aluno1={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
if(aluno1.notas>=60){aluno1si=true;totalaprovados=totalaprovados+1}
    let aluno2={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
if(aluno2.notas>=60){aluno2si=true;totalaprovados=totalaprovados+1}
    let aluno3={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
if(aluno3.notas>=60){aluno3si=true;totalaprovados=totalaprovados+1}
    let aluno4={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
if(aluno4.notas>=60){aluno4si=true;totalaprovados=totalaprovados+1}
    alert(aluno1.nome+" aprovado? "+aluno1si)
    alert(aluno2.nome+" aprovado? "+aluno2si)
    alert(aluno3.nome+" aprovado? "+aluno3si)
    alert(aluno4.nome+" aprovado? "+aluno4si)
    console.log("total de alunos aprovados "+totalaprovados)





}




