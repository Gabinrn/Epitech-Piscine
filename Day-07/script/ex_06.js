function ucFrist(string) {
  return string.charAt().toUpperCase() + string.slice(1);
}

function Hero(nom, classe, intlvl, strlvl) {
    this.nom = nom;
    this.classe = classe;
    this.intlvl = intlvl;
    this.strlvl = strlvl;

    var ucName = ucFrist(this.nom);

  if (this.intlvl > 1) {
    intelpoint = "points";
  }
  else {
    intelpoint = "point";
  }
  if (this.strlvl > 1){
      forcepoint = "points";
  }
  else {
      forcepoint = "point";
  }

 document.getElementsByTagName("div")[2].innerHTML += '"I am ' + ucName + " the " + this.classe + ", I have " + this.intlvl + " intelligence " + intelpoint +  " and " + this.strlvl + " strength " + forcepoint +  '"</br>';
};

var mage = new Hero("amadeus", "mage", 10, 3);
var warrior = new Hero("pontius", "warrior", 1, 8);
mage.toString();
warrior.toString();
