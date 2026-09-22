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

