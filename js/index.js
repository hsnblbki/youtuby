$(document).ready(function(){
$(".first-list-element").addClass("active");

$(".nav-item").click(function(){
$(".nav-item").removeClass("active");
$(this).addClass("active");
});
$("#toggler").click(function(event){
  $("#wrap").toggleClass("toggled");
 
  var right= $(".siedbar").css("right");
  if (right == "0px")
  {
    $(".siedbar").css({"right" : "-17rem"});
    $("#layer").fadeOut();
  }
  else
  {
    $(".siedbar").css({"right" : "0"});
    $("#layer").fadeIn()
  }
 });
 $("#layer").click(function(){
  $(".siedbar").css({"right" : "-17rem"});
  $("#layer").fadeOut();
 });
 $(".search-icon").click(function(){
  $(".search-input").slideToggle("slow");
 });
});