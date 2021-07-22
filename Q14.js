function addArrayItem(){
    var fruits=["Apple","Banana"] ;
    var index=1;

//insert "white" at index 1
fruits.splice(index, 0, "Mango");
fruits.splice(index, 0, "cherry");
fruits.splice(index, 0, "Grape");

var index3=fruits[3];
var lenth=fruits.length;
var reverse=fruits.reverse();



    return "Index 3 have :"+index3+`<br>`+"Length of the array is :"+lenth+`<br>`+"Reverse of this array is :"+reverse;
}