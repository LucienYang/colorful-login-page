$(function(){
	colorfulBackground({
	  container: document.getElementById('colorful-container'),
	  animation: true,
	  size: [1000, 1000],
	  grid:[3,2],
	  speed:10
	});
	$(".submitBtn").click(function(e){
		e.preventDefault();
		$(".colorful-container-wrapper").animate({height:"500px"},500);
		$(".head-pic").animate({top:"200px"},500);
		$(".head-pic").addClass("bluePulse");
		//$(".head-pic img").addClass("rotate");
		$(".loadingPanel").show();
		$(".canclePanel").show();
	})
	$(".cancleBtn").click(function(e){
		e.preventDefault();
		$(".loadingPanel").hide();
		$(".canclePanel").hide();
		$(".colorful-container-wrapper").animate({height:"200px"},500);
		$(".head-pic").removeClass("bluePulse").animate({top:"150px"},500);
		//$(".head-pic img").removeClass("rotate");
	})
})