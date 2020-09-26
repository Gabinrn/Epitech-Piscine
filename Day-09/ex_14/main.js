$("p").on({
 mouseover: function(){
   $(this).addClass("blue");
 },
 mouseout: function(){
   $(this).removeClass("blue");
 },
});


$("p").click(function(){
  $(this).addClass("highlighted");
});


$("p").contextmenu(function(){
  $(this).removeClass("highlighted");
});
