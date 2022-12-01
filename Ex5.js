function pog(){
    var l = parseFloat(document.getElementById("l").value);
    var c = parseFloat(document.getElementById("c").value);

    var m = l * c;
    var p = m * 36;
    document.getElementById("preço").innerHTML = "R$" + p.toFixed(2);
}