$(document).ready(function(){  

	$("#navigation1").navigation({
		submenuIndicatorTrigger: false
	});
	
	$("#navigation2").navigation({
		effect: "slide",
		submenuIndicatorTrigger: false
	});
	
	$("#navigation3").navigation({
		animationOnShow: "zoom-in",
		animationOnHide: "zoom-out",
		submenuIndicatorTrigger: false
	});
	
	$("#navigation4").navigation({
		overlayColor: "rgba(233,87,63,0.8)",
		submenuIndicatorTrigger: false
	});
	
	$("#navigation5").navigation({
		hidden: true,
		submenuIndicatorTrigger: false
	});
	$(".btn-show").click(function(){ 
		$("#navigation5").data("navigation").toggleOffcanvas();
	});
	
	$("#navigation6").navigation({
		offCanvasSide: "right",
		submenuIndicatorTrigger: false
	});
	
	$("#navigation7").navigation({
		submenuIndicatorTrigger: false
	});
	
	$("html").on("contextmenu",function(e){
        return false;
    });
	$('html').on('cut copy paste', function (e) {
        e.preventDefault();
    });
	$('html').on("keypress keydown mousedown", function(event){
		event = (event || window.event); 
		if (event.keyCode == 123 || (event.ctrlKey && event.which == 85) || event.which == 3) {  
			return false;  
		} 
	});
		
});