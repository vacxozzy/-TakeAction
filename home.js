$(document).ready(function(){
    hideall=function(showthis){
        $("#vegantext").hide();
        $("#blmtext").hide();
        $("#aleppotext").hide();
        $("#lgbtqtext").hide();
        $("#actions-carousel").hide();
        $(showthis).show();
    }
    $("#blm").click(function(){
        hideall("#blmtext")
});
    $("#aleppo").click(function(){
        hideall("#aleppotext")
});
    $("#lgbtq").click(function(){
        hideall("#lgbtqtext");
});
    $("#vegan").click(function(){
        hideall("#vegantext");
});
    $("#home").click(function(){
        hideall("#actions-carousel");
        
    });
    $("#search").click(function(){
        if ($("#searchinput").val()=="black lives matter"){
            hideall("#blmtext");
        }
        if ($("#searchinput").val()=="veganism"){
            hideall("#vegantext");
        }
        if ($("#searchinput").val()=="lgbtq"){
            hideall("#lgbtqtext");
        }
        if ($("#searchinput").val()=="aleppo"){
            hideall("#aleppotext");
        }
    });
    
});
