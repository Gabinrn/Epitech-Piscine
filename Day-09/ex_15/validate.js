$(document).ready(function(){
 $(".error").fadeTo(0.0001, 0.0);
});

$('#form').submit(function(e) {
  e.preventDefault();
var texte = $('#listItem').val();
  if (texte.length > 3 && texte.length < 21 ) {
    const list = $('<li />').text(texte);
    $('#listReceive').append(list);
    $(".error").fadeTo(200, 0.0);
  }
  else {
    $(".error").fadeTo(200, 1.0);
  }
});
