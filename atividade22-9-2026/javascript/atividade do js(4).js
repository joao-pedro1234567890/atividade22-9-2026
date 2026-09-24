
function atv4(){
    let peso=Number(prompt("dijete o peso"));
    let altura=Number(prompt("dijite a altura"));
    let imc = peso/(altura*altura);
    console.log(imc);
if(imc<18.5){
    alert("abaixo do peso");
};
if(imc>25){
    alert("acima do peso");
};
if(imc<25 &&imc>18.5){
    alert("peso ideal");
};
}

