$(document).ready(function(){

    $(".search-filters-icon").click(function(){
    $(".filter-column").slideToggle("slow");
    });
  $("input:checkbox").click(function(){
     $box=$(this);
     if($box.is(":checked")){
         var group="input:checked[name="+$box.attr("name")+"]";
         $(group).prop("checked",false);
         $box.prop("checked",true);
     }
  });
});