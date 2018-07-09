$(document).ready(function() {
	$('a.nav-link').click(function(event) {
		event.preventDefault();
		$('a.nav-link').removeClass('active');
		$(this).addClass('active');
		var id_pos = $(this).attr('href');
		var pos = $(id_pos).offset().top;
		$('html,body').animate({scrollTop: pos-160},1400,'easeInOutQuart'); 
	});
	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop: -160},1400,'easeInOutQuart'); 
	});
	$(window).scroll(function(){
		var pos_body = $('html,body').scrollTop();
		if(pos_body>=1200){
			$('.back-to-top').addClass('show');
			$('header').addClass('hidden');
		}else {
			$('.back-to-top').removeClass('show');
			$('header').removeClass('hidden');
		}
	});
	$('#view-feature').click(function(event) {
		$('html,body').animate({scrollTop: $('#section-feature').offset().top-160},1400,'easeInOutQuart');
		$('a.nav-link').removeClass('active');
		$('#link-section-feature').addClass('active');
	});

	$('#view-more-feature-1').click(function(event) {
		$('#dialog-feature-1').addClass('show');
		$('.background-dialog').addClass('show');
	});
	$('.background-dialog').click(function(event) {
		$('#dialog-feature-1').removeClass('show');
		$('.background-dialog').removeClass('show');
	});	
	$('#close-dialog-1').click(function(event) {
		$('#dialog-feature-1').removeClass('show');
		$('.background-dialog').removeClass('show');
	});		
});