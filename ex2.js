function main()
{
 var n = parseInt(document.getElementById("n").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(n);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(n);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{
 return ( (x-32)*5/9 );
}
