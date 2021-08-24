$(document).on('click','.navbar',function(){
    let navbar = $(this);
        hide = $(".mob");

        if (navbar.attr("data-navbar") != "active") {
           hide.fadeIn();
           navbar.attr("data-navbar", "active");
           navbar.css({"background-image":"url('images/icon/close.svg')", "transition":"0.4s"});
        }
        else{
           hide.fadeOut();
           navbar.attr("data-navbar", "unactive");
           $(".nav-bar-element-first").removeClass("rotat-first");
           $(".nav-bar-element-last").removeClass("rotat-last");
           navbar.css({"background-image":"url('images/icon/bar.svg')", "transition":"0.4s"});
        }
});