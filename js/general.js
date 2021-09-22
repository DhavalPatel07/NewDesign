var $=jQuery.noConflict();
$(document).ready(function(){
    /*$('a[href*=\\#]:not([href=\\#])').click(function(e){
        e.preventDefault();       
        var target_name = $(this).attr('href');
        if(target_name.length){
           $('html,body').animate({ scrollTop: $(target_name).offset().top - 50  }, 1000);
        }
    });*/ 
    if(window.location.hash){
        $('html, body').animate({ scrollTop: $(window.location.hash).offset().top }, 'medium');
    }
    $(window).scroll(function () {
        // Back to Top 
        if($(this).scrollTop() > 300 ) { $(".go-up").css("bottom","0px"); }
        else {  $(".go-up").css("bottom","-60px");  } 
     });
    $(".go-up").click(function(){ $("html,body").animate({scrollTop:0},500); return false;  });      
    
    
    // Menu
    $('.enumenu_ul').responsiveMenu({menuslide_overlap: true, menuslide_direction: 'right', onMenuopen: function() {
    } });
    $(".menu a").on("click",function(){
        $(".menu-icon").removeClass("active");
        $("body").removeClass("menu-open");
    });
    // One page Menu
    var sections = $('.SectionBox'), nav = $('.home .min-header'), nav_height = nav.outerHeight();
        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();  
            sections.each(function() {
                var top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').removeClass('active');
                    sections.removeClass('active');              
                    $(this).addClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
            });
        });

        nav.find('a').on('click', function () {
            var $el = $(this), id = $el.attr('href');  
            $('html, body').animate({
                scrollTop: $(id).offset().top - 100
            }, 1000);  
            return false;
        });
    // Hover to banner image animation
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;
    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
      $('.hero-banner-image').css({'-webit-transform': translate, '-moz-transform': translate, 'transform': translate });
      window.requestAnimationFrame(moveBackground);
    }
    $(window).on('mousemove click', function(e) {
      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 100;
    });
    moveBackground();

    // Scroll To ADD Class Header
     $(window).scroll(function () {$('body').toggleClass("header-sticky", ($(window).scrollTop() > 150)); });
    // Attach file name
    $('.App-slider').owlCarousel({
        loop: true,
        center: true,
        margin: 100,
        dots: true,
        nav: true,
        items: 3,
        autoplay: false,
        touchDrag  : false,
        mouseDrag  : false,
        responsive: {
            0: { margin: 0, items: 1},
            768: {
                margin: 50,
            },
            1201: {
                margin: 100,
            }
        }
    });
    // Button Hover effect 
    $(function() {$('.ctm-btn a').on('mouseenter', function(e) {var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('.span').css({top:relY, left:relX}); }) .on('mouseout', function(e) {var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('.span').css({top:relY, left:relX}); }); });

    // Custome Tabbing
    $(".panel-toggle").on("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".inner").slideUp(500);
        } else {
            $(".panel-toggle").removeClass("active"); 
            $(this).addClass("active"); 
            $(".inner").slideUp(500); 
            $(this).siblings(".inner").slideDown(500);
        }
    });

});
// Animation
(function($) {
  $.fn.visible = function(partial) {var $t = $(this), $w = $(window), viewTop = $w.scrollTop(), viewBottom = viewTop + $w.height(), _top = $t.offset().top, _bottom = _top + $t.height(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom; return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); }; })(jQuery); var win = $(window); var allMods = $(".animation-effect"); allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {el.addClass("come-in"); }; }); win.scroll(function(event) {allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {setTimeout(function(){el.addClass("come-in"); }, 600); }; /*else {el.removeClass("come-in"); } */ });
});


function readyFn($){
    /* --- Scroll rottate icon script ---*/
    skrollr.init({
        forceHeight: false,
        easing: {
            vibrate: function(p) {
                return Math.sin(p * 10 * Math.PI);
            }
        },
        mobileCheck: function() {return false; }
    });
}
$( document).ready(readyFn);
$( window).on("load",readyFn);