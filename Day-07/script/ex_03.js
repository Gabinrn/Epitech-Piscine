var yourname = document.getElementsByTagName("div")[2];
  yourname.innerHTML = "Click here to enter your name ";

yourname.onclick = function yournam() {
  var txt;
  var person = prompt("What's your name ?");
  if (person == null || person == "") {
        yournam();
  }

  else {
    var r = confirm("Are you sure that " + person + " is your name ?");
      if (r == true) {
        alert("Hello " + person);
        yourname.innerHTML = "Hello " + person;
      }
      else {
        yournam();
      }
  }
};
