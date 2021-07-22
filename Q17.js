function addArray(){
    var fruits=["Apple"];
    fruits.splice(0, 0, "Pineapple", "Lemon");
    fruits.splice(3, 0, "Orange", "Peach");
    return fruits;
}