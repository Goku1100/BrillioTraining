function add(val){
    document.getElementById("answer").value+=val;
}
function calculate(){
    try{
        var x=document.getElementById("answer").value;
        document.getElementById("answer").value=eval(x);
    }
    catch(Exception){
        alert(Exception)
    }
}
function clearAll(){
    document.getElementById("answer").value="";
}
function clear(){
    var x=String(document.getElementById("answer").value);
    document.getElementById("answer").value=x.substring(0,x.length-1);
}