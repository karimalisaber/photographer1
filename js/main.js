$(document).ready(function(){
	
	'use strict' ;
		
	// adjust header height 
	var myHeader = $('header') ;
	
	myHeader.height($(window).height()) ; 
	$(window).on('resize' , function(){
		myHeader.height($(window).height()) ;
		
	$('.bxslider').each( function() {$(this).css('marginTop', ($(window).height() - $('.bxslider div').height() ) /2 )  ; } );

	});
	
	
	
	$('.links li a').on('click' , function() {	
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	
	// navbar 
		
	
		  $(window).on('scroll', function(){
			  
			  'use strict' ; 
			  
			  var srrolltop = $(window).scrollTop() ;
			console.log(srrolltop) ; 	
			  if( srrolltop >= $('header').height() ){
				$('nav').addClass("fixed-nav") ; 
			  }else{
				  $('nav').removeClass("fixed-nav") ;
			  }
		  }); 
			
			
					
	/* header  slider*/
	$(function(){
  $('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 600, 
		pager: false 
  });
});

// adjust bx slider

$('.bxslider').each(  function() {$(this).css('marginTop', ($(window).height() - $('.bxslider div').height() ) /2 )  ; } );



// smooth scroll 


$('.links li a').click(function(){
	$('html , body').animate(
	{
		scrollTop: $('#' + $(this).data('val')).offset().top   
		
	} , 1000	);
});

// auto slider function

(function autoslider(){
	
	$('.slider .active').each( function(){
		
		if(!$(this).is(':last-child')){
			$(this).delay(3000).fadeOut(1000, function(){					
				$(this).removeClass().next().addClass('active').fadeIn(); 
				autoslider() ; 
			}) ; 
		}else{
			$(this).delay(3000).fadeOut(1000, function(){
					
				$(this).removeClass();
				$('.slider div').eq(0).addClass('active').fadeIn() ;	
				autoslider() ; 
			}) ;
			
		}
			
		
	});	
		
}());



// mixitup

mixitup('#mixitup') ; 

$('.shuffle li').on('click' , function(){
	
	$(this).addClass('active').siblings().removeClass('active') ; 
})	;



// nicescroll 

$(function() {  
    $("body").niceScroll({
		cursorcolor: '#1abc9c' 
		
	}
	);
});
});


