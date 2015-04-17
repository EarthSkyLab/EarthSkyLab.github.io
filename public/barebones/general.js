$(function(){

	// sidebar menu functionality
    $('.secondary-content > div > a.categories').click(function(e){
        if($(this).parent().prop('class').indexOf('active') == -1){
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
        }else {
            $(this).parent().siblings().removeClass('active');
        }
        $(this).siblings('ul').children('li').removeClass('active');
        $('body > .subcat-posts').removeClass('show');
        e.preventDefault();
    });

	// sidebar submenu functionality
    $('a.esl-has-submenu').click(function(e){
        var link = $(this).prop('href');
        if(link.length > 0 && link.indexOf('#') > -1){
            var link = link.substr(link.indexOf('#')+1);
            $('body > .subcat-posts > ul').removeClass('show');
            $('body > .subcat-posts #posts-'+link).addClass('show');
        }

        if($(this).parent().prop('class').indexOf('active') == -1){
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $('body > .subcat-posts').addClass('show');
        }else {
            $(this).parent().siblings().removeClass('active');
            $('body > .subcat-posts').toggleClass('show');
        }

        sidebarDectector();
        e.preventDefault();
        e.stopPropagation();
    });

	// close the subcategory sidebar on body click
	$('body > .subcat-posts').click(function(e){
		e.stopPropagation();
	});
	$('body').click(function(e){
		$('body > .subcat-posts > ul').removeClass('show');

		//$('body > .subcat-posts').removeClass('show');
	});

    // sidebar icon height detecter
    function sidebarDectector(){
        $('.subcat-posts .more-below').removeClass('more');
        var sidebarHeight = $('.subcat-posts ul.show')[0].scrollHeight;
        var windowHeight = $( window ).height();
        if (sidebarHeight > windowHeight){
            console.log('in window sidebar');
            $('.subcat-posts .more-below').addClass('more');
        }
    }

    // open post sidebar on proper category
    if($('#post-category-name')){
        var name = $('#post-category-name').text();
        $('section.secondary-content.mobile-none > div').each(function(){
            var div = $(this);
            if(name == $('> a > span', div).text()){
                div.addClass('active');
                return false; // works as a break
            };
            $('> ul > li > a', div).each(function(){
                if(name == $(this).text()){
                    div.addClass('active');
                    $(this).parent().addClass('active');
                    return false; // works as a break
                }
            });
        });
    }


});


$('.type-post .addtoany_share_save_container a img').each(function( index ){
    $(this).css({"width":"auto","height":"auto"});
});