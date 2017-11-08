var myString = "Hello!                                                 ";
var myString2 = "My name is Aleksandar Atlagić                                             ";
var myString3 = "and I'm web developer who can be your ace in the sleeve";
var myArray = myString.split("");
var myArray2 = myString2.split("");
var myArray3 = myString3.split("");
var myTimer;
function frameLooper(){
if(myArray.length > 0 && myArray2.length > myArray.length){
  document.getElementById('hello').innerHTML += myArray.shift();
  document.getElementById('myname').innerHTML += myArray2.shift();
  document.getElementById('sleeve').innerHTML += myArray3.shift();
}
else{
  clearTimeout(loopTimer);
}
loopTimer = setTimeout('frameLooper()', 70);
}
frameLooper();