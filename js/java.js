function add(){
    var mm=document.getElementById("num1").value;
    var dd=document.getElementById("num2").value;
    var yy=document.getElementById("num3").value; 
    var ge = document.getElementById("man","woman").value
    var cc=(yy-1)/100+1;
    var submit= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )% 7;
    var Submit=Math.floor(submit);  
// document.querySelector("#house").innerHTML=Result;
// alert(result);
var know=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
if(dd>0 && dd<=31 && mm>0 && mm<=31 && yy>0){
if (  Submit==0 && ge=="male" ){
    
    document.getElementById("house").innerHTML=know[0];
}
else if (Submit==1 && ge=="male"){



    document.getElementById("house").innerHTML=know[1];
}
else if (Submit==2 && ge=="male"){
    document.getElementById("house").innerHTML=know[2];
}
else if (Submit==3 && ge=="male"){
    document.getElementById("house").innerHTML=know[3];
}
else if (Submit==4 && ge=="male"){
    document.getElementById("house").innerHTML=know[4];
}
else if (Submit==5 && ge=="male"){
    document.getElementById("house").innerHTML=know[5];
}
else if (Submit==6 && ge=="male"){
    document.getElementById("house").innerHTML=know[6];
}
else if (Submit==0 && ge=="female"){
    document.getElementById("house").innerHTML=know[7];
}
else if (Submit==1 && ge=="female"){
    document.getElementById("house").innerHTML=know[8];
}
else if (Submit==2 && ge=="female"){
    document.getElementById("house").innerHTML=know[9];
}
else if (Submit==3 && ge=="female"){
    document.getElementById("house").innerHTML=know[10];
}
else if (Submit==4 && ge=="female"){
    document.getElementById("house").innerHTML=know[11];
}
else if (Submit==5 && ge=="female"){
    document.getElementById("house").innerHTML=know[12];
}
else if (Submit==6 && ge=="female"){
    document.getElementById("house").innerHTML=know[13];
}
 else{
     alert("know");
}
}
else{
    alert("please enter a valid date")
}
}

