var lista = [];
var mai = -999999999999999999999999;
var mo = 999999999999999999999999;
function inserir()
{
    let valor = parseFloat(document.getElementById('valor').value);
    lista.push(valor);
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}
function exibir()
{
    var res = document.getElementById('res');
    res.innerHTML = "";
    for (let i = 0; i < lista.length; i++)
    {
        res.innerHTML += lista[i] + "|";
    }
}
function maior()
{
    for(var i = 0; i < lista.length; i++)
    {
        if(lista[i] > mai){
            mai = lista[i];
        }
    }
    document.getElementById('res').innerHTML = mai;
}
function menor()
{
    for( var i = 0; i < lista.length; i++)
    {
        if(lista[i] < mo){
            mo = lista[i];
        }
    }
    document.getElementById('res').innerHTML = mo;
}
