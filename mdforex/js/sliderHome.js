/*--------------------------------------------------------------------
JAVASCRIPT "Javascript index"

Version: 	2.0 - 2009/2010
author: 	Burocratik (alexandre gomes)
email: 		alex@burocratik.com
website: 	http://www.burocratik.com
-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------
 =SLIDE SHOW NEWS PRESS
 -----------------------------------------------------------------------*/
$(document).ready(function(){
  //o primeiro está visivel
	$("#slideBox li").hide().filter(":first").show();
	$("#slideLink li").filter(":last").addClass("last");
	$("#slideLink a").filter(":first").addClass("on");
  // Parametros para animacao automatica
  global_Nmax = $("#slideBox li").size();
  global_N = 0;
  startAnim();
	//Se clico num link
  $("#slideLink a").click(function () {
   stopAnim();
   // Verifica se tem a class "on", se NAO tem (-1) executa o script
	 if (this.className.indexOf("on") == -1){
	 	$("#slideLink a").removeClass("on"); //tira a class a todos
    $(this).addClass("on"); //mete a class ao que eu cliquei
		//fade nas caixas
    var caixas = $(this).attr("href").replace("#","");
		var aux = $("li#"+caixas+"");
    $("#slideBox li").hide();  //esconde todas
		if($.browser.msie && $.browser.version<"9.0"){ /* IE-jQuery Cleartype glitch by Ben Novakovic*/
			$(aux).fadeIn("normal",function() {this.style.removeAttribute('filter');});
		}else{
   		$(aux).fadeIn("normal"); //fadeIn da que cliquei
		}
	 }
	 return false;
	})

})

// =Iniciar e terminar Animacao automatica
function startAnim(){global_meuSetInterval = setInterval("tempoAnim()", 7000)}
function stopAnim(){clearInterval(global_meuSetInterval);}
// =Funcao que tira e insere classes
function tempoAnim(){
	if(global_N == (global_Nmax-1)){
    global_N = 0;
	}else{
    global_N += 1;
	}
  for (var i=0; i<global_Nmax; i++ ) {
    var aux = $("#slideBox li")[i];
    var links = $("#slideLink a")[i];
    if(global_N == i){
			if($.browser.msie && $.browser.version<"9.0"){ /* IE-jQuery Cleartype glitch by Ben Novakovic*/
				$(aux).fadeIn("slow",function() {this.style.removeAttribute('filter');});
			}else{
   			$(aux).fadeIn("slow");
			}
			$(links).addClass("on");
    }else{
      $(aux).hide();
      if($(links).hasClass("on")){$(links).removeClass("on");}
    }
	}
}