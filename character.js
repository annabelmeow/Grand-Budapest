$( document ).ready(function() {
    
	var infoWide = $(".info").width();

	$('.fullinfo').css('width', 9*infoWide);
	$('.fullinfo section').css('width', infoWide);

	$('#pic1').click(function(){
		$('.fullinfo').css('left',-infoWide);
	});
	$('#pic2').click(function(){
		$('.fullinfo').css('left',-2*infoWide);
	});
	$('#pic3').click(function(){
		$('.fullinfo').css('left',-3*infoWide);
	});
	$('#pic4').click(function(){
		$('.fullinfo').css('left',-4*infoWide);
	});
	$('#pic5').click(function(){
		$('.fullinfo').css('left',-5*infoWide);
	});
	$('#pic6').click(function(){
		$('.fullinfo').css('left',-6*infoWide);
	});
	$('#pic7').click(function(){
		$('.fullinfo').css('left',-7*infoWide);
	});
	$('#pic8').click(function(){
		$('.fullinfo').css('left',-8*infoWide);
	});
});


$('.shots').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
		

















