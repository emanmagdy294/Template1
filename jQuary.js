
/** Section 2  **/
$("#one").click(function(){
    $("#singer1").slideToggle(500),
    $("#singer2").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer4").slideUp(500)    
})

$("#two").click(function(){
    $("#singer2").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer4").slideUp(500)  
})
$("#three").click(function(){
    $("#singer3").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer2").slideUp(500),
    $("#singer4").slideUp(500)
})
$("#four").click(function(){
    $("#singer4").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer2").slideUp(500)
});

$(document).ready(function(){
    $("#singer3").slideUp(),
    $("#singer2").slideUp(),
    $("#singer4").slideUp()
    $("#singer4").slideUp()
    })
/************************************/
/* SIDE BOX */

$("#openSlide").click(function(){
    if($(".Box").hasClass("test")){
        $(".Box").removeClass("test")
    }
    else{
        $(".Box").addClass("test")
    }
    })

/* href */
$("a").click(function(e){
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body") .animate({scrollTop:sectionOffset} , 2000);
})
/************************************/

/* counter */

function countdown(){
    var now = new Date();
    var eventDate = new Date(2021,9, 20);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";

    document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(countdown, 1000);
}

countdown();

/***************************************************/
/* TEXT erea*/
$(function(){   
    var max =100;   
    $("textarea").keyup(function(){       
        var length=$(this).val().length;
        var character = max - length;   
        if(character<=0)
            {
                 $("#char").text("your available character finished");              
            }
        else{        
       $("#char").text(character);
        }       
    });    
});
/**************************************************/
