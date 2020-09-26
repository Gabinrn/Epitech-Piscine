$("p").on({
 mouseover: function(){
   $("p").css("background-color", "lightgray");
 },
 mouseout: function(){
   $("p").css("background-color", "white");
   $("p").fadeTo(0.1, 1);
 },
 click: function(){
   $("p").fadeTo(0.1, 0.0);
 }
});
