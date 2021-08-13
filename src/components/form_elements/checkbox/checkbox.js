$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).addClass("green"); 
    }else{
        $(this).removeClass("green");  
    }
});