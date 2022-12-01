window.onload = function(){
    document.getElementById("btn").addEventListener('click',btn_click);
}

function calcular(){
    var n3 = parseFloat (document.getElementById('n3').value);
    var n4 = parseFloat (document.getElementById('n4').value);
    var n5 = parseFloat (document.getElementById('n5').value);
    document.getElementById('resultado').innerHTML = n3 + n4 + n5;
}

function btn_click(){
    calcular();
}