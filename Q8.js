function bigNumber(a,b,c,d,e){
    var result;
    if (a>b && a>c && a>d && a>e)
{
  result=a;
}
else if (b>a && b>c && b>d && b>e)
{
    result=b;
}
else if (c>a && c>b && c>d && c>e)
{
    result=c;
}
else if (d>a && d>c && d>b && d>e)
{
    result=d;
}
else
{
    result=e;
}

return alert("Biggest number is:"+result);
}