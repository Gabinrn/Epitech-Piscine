
$(".platypus").click(function(){
  $(".platypus").animate({left: '150px'}, "slow", function(){
    $(".platypus").animate({top: '200px'}, "slow", function(){
      $(".platypus").css("background-color", "green");
      });
  });
});
