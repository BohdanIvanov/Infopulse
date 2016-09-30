$(document).ready(function(){
	$('.mobile-menu').click(function(event){
        event.preventDefault();
		$(this).toggleClass('open');
	});
    
    $('.sl').slick({
    dots: true
    });
});

