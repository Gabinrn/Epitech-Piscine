document.getElementsByTagName("BODY")[0].addEventListener("keypress", addchar);

var result="";
function addchar(e) {
 var key = e.keyCode;
 if (key !== ""){
   result+=(String.fromCharCode(key));
   if(result.length > 42){
      result = result.substring(1);
   }
 }
 document.getElementsByTagName("div")[2].innerHTML = result;
 }
