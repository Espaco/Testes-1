function clicar(){
    var c = window.document.getElementById('area');
    c.innerText = 'Quem ta lendo e burro!';
}
function entrar(){
    var e = window.document.getElementById('area');
    e.innerText = 'Hora de dormir';
    e.style.background = 'red';
}
function sair(){
    var s = window.document.getElementById('area');
    s.innerText = 'Hora de acordar';
    s.style.background = 'blue';
}
function somar(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1+ n2;

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`;
}