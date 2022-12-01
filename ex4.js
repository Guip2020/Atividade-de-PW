function kapa(){
    var k1 = parseFloat (document.getElementById("k1").value);
    var k2 = parseFloat (document.getElementById("k2").value);
    var res = k1/8*k2;
    document.getElementById("resultado").innerHTML = res;
}
