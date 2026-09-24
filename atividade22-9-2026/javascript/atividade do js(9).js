
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



