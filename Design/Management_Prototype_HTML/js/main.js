jQuery(document).ready(function($){
	"use strict";

	function collapse_sidebar(){
		$('.has-sidebar').addClass('small-sidebar');
		$('.btn-sidebar-toggle').addClass('active');
	}

	function expand_sidebar(){
		$('.has-sidebar').removeClass('small-sidebar');
		$('.btn-sidebar-toggle').removeClass('active');
	}

	function setup_layout(){
		var window_height = $(window).height();
		var window_width = $(window).width();
		var footer_wrapper_height = $('.footer-wrapper').outerHeight();
		var main_wrapper_height = window_height - footer_wrapper_height;
		
		$('.main-wrapper').css('min-height', main_wrapper_height);
		
		// Collapse & Expand Sidebar via viewport 
		if(window_width < 1200){
			collapse_sidebar();
		}else{
			expand_sidebar();
		}
	}

	setup_layout();

	$('.btn-sidebar-toggle').click(function(e){
		e.preventDefault();
		if($('.has-sidebar').hasClass('small-sidebar')){
			expand_sidebar();
		}else{
			collapse_sidebar();
		}
	});

	$('select').select2();

	$(window).resize(function(){
		setup_layout();
		$('select').select2();
	});

	//Icheck Init
	$('.label-icheck input').iCheck({
	    checkboxClass: 'icheckbox_square-blue',
	    radioClass: 'iradio_square-blue',
	    increaseArea: '20%' // optional
  	});

	//Scroll Init
  	$(".scroll").niceScroll({
		cursorwidth:'2',
		cursorborder:'0',
		cursorcolor:'rgba(0,0,0,0.2)',		
	});

	$(".nice-scroll").niceScroll({
		cursorwidth:'6',
		cursorborder:'0',
		cursorcolor:'rgba(0,0,0,0.2)'
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$(".nice-scroll").getNiceScroll().resize();
	});

	//Datatable Init
	$('.datatable').DataTable({
		dom:'t<"hr">p<"text-right text-secondary"i>',
		searching: false,
		lengthChange: false,
		oLanguage: {
			oPaginate: {
				sFirst: '<span class="oi oi-arrow-thick-left"></span>', // This is the link to the first page
				sPrevious: '<span class="oi oi-caret-left"></span>', // This is the link to the previous page
				sNext: '<span class="oi oi-caret-right"></span>', // This is the link to the next page
				sLast: '<span class="oi oi-arrow-thick-right"></span>' // This is the link to the last page
			},
			sInfo: "件中_TOTAL_  _START_ 〜 _END_件",
		}
	});

   
})