let p1=prompt("Digite seu Nome");
let p2=prompt("Digite o Bicho");
let p3=prompt("Digite o Bicho Inimigo");
let p4=prompt("Digite uma Quantia de Dinheiro");
let msg=document.getElementById("msg")

msg.innerHTML=`Olá,${p1} o seu bicho é ${p2} e você vai enfrentar o(a)${p3} valendo R$${p4}`