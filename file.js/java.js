function add(){
    var mm=document.getElementById("num1").value;
    var dd=document.getElementById("num2").value;
    var yy=document.getElementById("num3").value;
    
    var cc=(yy-1)/100+1;
    var ge = document.getElementById("man","woman").value;
    var result= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )% 7;
    var Result=Math.floor(result);  

document.querySelector("#house").innerHTML=Result;

var know=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
if (  Result==0 && ge=="male" ){
    document.getElementById("house").innerHTML=know[0];
}
else if (Result==1 && ge=="male"){
    document.getElementById("house").innerHTML=know[1];
}
else if (Result==2 && ge=="male"){
    document.getElementById("house").innerHTML=know[2];
}
else if (Result==3 && ge=="male"){
    document.getElementById("house").innerHTML=know[3];
}
else if (Result==4 && ge=="male"){
    document.getElementById("house").innerHTML=know[4];
}
else if (Result==5 && ge=="male"){
    document.getElementById("house").innerHTML=know[5];
}
else if (Result==6 && ge=="male"){
    document.getElementById("house").innerHTML=know[6];
}
else if (Result==0 && ge=="female"){
    document.getElementById("house").innerHTML=know[7];
}
else if (Result==1 && ge=="female"){
    document.getElementById("house").innerHTML=know[8];
}
else if (Result==2 && ge=="female"){
    document.getElementById("house").innerHTML=know[9];
}
else if (Result==3 && ge=="female"){
    document.getElementById("house").innerHTML=know[10];
}
else if (Result==4 && ge=="female"){
    document.getElementById("house").innerHTML=know[11];
}
else if (Result==5 && ge=="male"){
    document.getElementById("house").innerHTML=know[12];
}
else if (Result==6 && ge=="male"){
    document.getElementById("house").innerHTML=know[13];
}
 return know;
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

