//Check Off Specefic To-Dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete To-Do
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

//$("input[type='text']").keypress(function(event){
$("input[type='text']").keypress(function(event){
    if ( event.which === 13){
        //grabbing next todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        //clear input
        $(this).val("");

    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
