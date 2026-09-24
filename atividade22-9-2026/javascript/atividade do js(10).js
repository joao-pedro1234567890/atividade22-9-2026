
function atv0(){
    let totalaprovados=0

    let aluno1si= false;let aluno2si= false;let aluno3si= false;let aluno4si=false
    let aluno1={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
    if(aluno1.notas>=60){
        aluno1si=true;totalaprovados=totalaprovados+1
    }
    let aluno2={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
    if(aluno2.notas>=60){
        aluno2si=true;totalaprovados=totalaprovados+1
    }
    let aluno3={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
    if(aluno3.notas>=60){
        aluno3si=true;totalaprovados=totalaprovados+1
    }
    let aluno4={ nome: prompt("dijite o nome") ,notas:Number(prompt("dijite a nota total"))}
    if(aluno4.notas>=60){
        aluno4si=true;totalaprovados=totalaprovados+1
    }
    alert(aluno1.nome+" aprovado? "+aluno1si)
    alert(aluno2.nome+" aprovado? "+aluno2si)
    alert(aluno3.nome+" aprovado? "+aluno3si)
    alert(aluno4.nome+" aprovado? "+aluno4si)
    console.log("total de alunos aprovados "+totalaprovados)





}




