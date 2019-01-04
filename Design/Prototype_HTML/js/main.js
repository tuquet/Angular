jQuery(document).ready(function($) {
    "use strict";

    $("body").on('click', '#header .menu-toggle', function(e) {
        e.preventDefault();
        open_site_menu();
    });

    function open_site_menu() {

        //Make some fun with animate
        $('.site-menu .nav-item, .site-menu-header .logo').css({ 'opacity': '0', 'transform': 'translateX(50%)' });
        $('.site-menu-header .menu-close').css({ 'opacity': '0', 'transform': 'translateX(200%)' });

        $(".site-menu-wrapper").fadeIn();

        var logo = anime({
            targets: '.site-menu-header .logo',
            opacity: 1,
            translateX: 0,
            easing: 'easeInOutCirc',
            duration: 500
        });

        var menu_close = anime({
            targets: '.site-menu-header .menu-close',
            opacity: 1,
            translateX: 0,
            easing: 'easeInOutCirc',
            duration: 50
        });

        var nav_link = anime({
            targets: '.site-menu .nav-item',
            opacity: 1,
            translateX: 0,
            easing: 'easeInOutCirc',
            duration: 500,
            delay: function(el, i, l) {
                return i * 100;
            }
        });
    }

    function close_site_menu() {

        var logo = anime({
            targets: '.site-menu-header .logo',
            opacity: 0,
            translateX: '-50%',
            easing: 'easeInOutCirc',
            duration: 300
        });

        var menu_close = anime({
            targets: '.site-menu-header .menu-close',
            opacity: 0,
            translateX: '-200%',
            easing: 'easeInOutCirc',
            duration: 300
        });

        var nav_link = anime({
            targets: '.site-menu .nav-item',
            opacity: 0,
            translateX: '-50%',
            easing: 'easeInOutCirc',
            duration: 300,
            delay: function(el, i, l) {
                return i * 50;
            }
        });

        nav_link.complete = function() {
            $(".site-menu-wrapper").fadeOut();
        }
    }

    $("body").on('click', '.site-menu-header .menu-close', function(e) {
        e.preventDefault();
        close_site_menu();
    });

    //Fixed Header
    function header_fixed() {
        if ($('body').hasClass('header-fixed')) {
            var viewport = $('.site-wrapper').outerWidth();
            $('.header-wrapper').css('width', viewport);
            $('.site-menu-wrapper').css({
                'position': 'fixed',
                'top': '0',
                'left': 'auto',
                'width': viewport
            });
        }
    }
    header_fixed();

    $(window).resize(function() {
        header_fixed();
        $('select').select2();
    });


    //Smooth Scroll
    $('.top-up-link').smoothScroll();

    //Horizontal Scroll
    $(".horizontal-scroll").niceScroll({
        cursorwidth: '0',
        cursorborder: '0'
    });

    // Scroll
    $(".scroll").niceScroll({
        cursorwidth: '4',
        cursorborder: '0',
        cursorcolor: 'rgba(0,0,0,0.4)',
        railpadding: { top: 1, right: 1, left: 1, bottom: 1 }

    });

    //Horizontal Scroll
    $('.label-icheck input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    $('.label-icheck input').on('ifChecked', function(event) {
        $(this).parents('.label-icheck').addClass('current');
    });

    $('.label-icheck input').on('ifUnchecked', function(event) {
        $(this).parents('.label-icheck').removeClass('current');
    });

    /* Check box not using icheck */
    $('.container-checkbox input').each(function(){
        if ($(this).prop('checked')==true){ 
            $(this).parents('.container--checkbox').addClass('bg-primary-light');
        }else{
            $(this).parents('.container--checkbox').removeClass('bg-primary-light');
        }
    });

    $('.container-radio input').each(function(){
        if ($(this).prop('checked')==true){ 
            $(this).parents('.container--radio').addClass('bg-primary-light');
        }else{
            $(this).parents('.container--radio').removeClass('bg-primary-light');
        }
    });

    $('.container--checkbox input:checkbox').change(function(){
         if ($(this).prop('checked')==true){ 
            $(this).parents('.container--checkbox').addClass('bg-primary-light');
        }else{
            $(this).parents('.container--checkbox').removeClass('bg-primary-light');
        }
    });

    //Input Focus
    function input_wrap() {

        $('.input-wrap .form-control').focus(function() {
            $(this).next('.btn-close').fadeIn(200);
        }).blur(function() {
            if (!$(this).val()) {
                $(this).next('.btn-close').fadeOut(100);
            }
        });;

        $('.input-wrap .btn-close').click(function(e) {
            e.preventDefault();
            $(this).prev('.form-control').val('');
            $(this).hide();
        })
    }

    input_wrap();

    //Select
    $('select').select2();

    function pk_modal() {
        var content_height = $('.site-wrapper').height() - $('.modal-pk .modal-content .modal-header').height() - 30;
        $('.modal-pk .modal-content .modal-body').css({
            'height': content_height,
            'overflow': 'hidden'
        });
    }
    pk_modal();

});
