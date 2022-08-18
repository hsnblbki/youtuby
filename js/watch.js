$(document).ready(function(){
$(".reply").click(function(){
$(this).parents("div.row").next("div.card-inner").toggle();
});

$("#myBtn").on("click",function(){
  read();
});
});
function read(){
    var dots=document.getElementById("dots");
    var btntext=document.getElementById("myBtn");
    var moretext=document.getElementById("more");
    if(dots.style.display === "none"){
        dots.style.display="inline";
        btntext.innerHTML="عرض المزيد";
        moretext.style.display="none";
    }
    else{
        dots.style.display="none";
        btntext.innerHTML="عرض عناصر اقل";
        moretext.style.display="inline";
    }
}