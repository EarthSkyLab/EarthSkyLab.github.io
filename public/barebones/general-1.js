// mobile sidebar menu functionality
	// Toggle Mobile Nav
	$('#mobile-burger').click(function(e){
		$('.mobile-display .subcat-posts').removeClass('active');
		$('.mobile-display .secondary-content').removeClass('active-second');
		$('.mobile-nav.secondary-content > div > a').parent().removeClass('active');
		$('.mobile-display .secondary-content').toggleClass('active');
		$('.home-nav-wrapper , .primary-content , .related-posts').toggleClass('none');

	});
    $('.mobile-nav-icon').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-header-close').toggleClass('active');
    });
    $('.mobile-header-close').on('click', function() {
		$(this).toggleClass('active');
        $('.mobile-nav-icon').toggleClass('active');
    });