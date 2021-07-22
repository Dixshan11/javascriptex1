function colorNum(num){
    var color;
    if(num>0 && num<=10){
        color="blue";
    }
    else if(num>10 && num<=20 ){
        color="red";
    }
    else if(num>20 && num<=30 ){
        color="green";
    }
    else{
        color="it is not a correct colour option";
    }

    return color;
}
