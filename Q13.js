function max_minArray(){
    const Myarray=[10,12,34,1,39];
    
    let max=Math.max.apply(null,Myarray);
    let min=Math.min.apply(null,Myarray);
    
    return "max value is:"+max+" and min value is:"+min;
}