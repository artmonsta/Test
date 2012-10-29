$(document).ready(function() {
//Main Naviagation
//  $("#menu").lavaLamp({
   // fx: "easeOutBack",
  //  speed: 800
 // });

//HIDE / SHOW MENU MDGROUP	
	$("#headerGroup").hide();
	$("h3.mdGrupo").click(function (){
		$("#headerGroup").slideToggle("fast");
		if ($(this).is(".on")) {
			$("h3.mdGrupo").removeClass("on");
		} else {
			$("h3.mdGrupo").addClass("on");
		}
	});

//HIDE / SHOW DEFINITION LIST	
	$("dl.list dt").click(function(){
    	$(this).next("dd").slideDown("normal").addClass("bg").siblings("dd").slideUp("fast");
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
	});
	$("dl.list dt").next("dd").hide();
	$("dl.list dt:first").addClass("first");

//HIDE / SHOW Top Tab Hightlight Buttons HOME
		$('.btnHighlights').hover(
		function () {
			if($(this).hasClass('forex_free')){
				$('.forex_free h2').addClass('forex_freeHover');
			}
			if($(this).hasClass('forex_beginner')){
				$('.forex_beginner h2').addClass('forex_beginnerHover');
			}
			if($(this).hasClass('forex_pro')){
				$('.forex_pro h2').addClass('forex_proHover');
			}
			$(this).show();
			$('ul', this).slideDown(100);
		}, 
		function () {
			$('.forex_free h2').removeClass('forex_freeHover');
			$('.forex_beginner h2').removeClass('forex_beginnerHover');
			$('.forex_pro h2').removeClass('forex_proHover');
			$('ul', this).slideUp(100, function () {
            	$(this).hide();	
          });
	});
	
//HIDE / SHOW UNORDER LIST	
	$("ul.niveis li span").click(function(){		
		$(this).next('dl').slideToggle("fast");
		$(this).toggleClass("selected");
		$(this).next('dl').toggleClass("bg");
	return false;
	}).next().hide();
	$("ul.niveis li span.selected").addClass("selected").next().show();
	$("ul.niveis li:first").addClass("first");
	$("ul.tutoriais li:first").addClass("first");
	
	
	$('.boxLink').click(function(){
		window.open($(this).find("a").attr('href'));
		return false;
	});
	
	
});