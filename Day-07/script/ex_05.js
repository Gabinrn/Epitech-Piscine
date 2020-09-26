
document.getElementsByTagName("select")[0].addEventListener("change", colorbackg);

var b1 = document.getElementsByTagName("button")[0];
var b2 = document.getElementsByTagName("button")[1];
var bod = document.getElementsByTagName("BODY")[0];
var selec = document.getElementsByTagName("select")[0];



          var size = 16;
          b1.onclick = function () {
              size += 1;
              bod.style.fontSize = size + "px";

          };

          b2.onclick = function () {
              size -= 1;
              bod.style.fontSize = size + "px";
          };

          function colorbackg() {
              var userChoice = selec.options[selec.selectedIndex].value;
              document.body.style.background = userChoice;
          };
