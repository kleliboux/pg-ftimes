$(function() {
	// KLL octobre 2013
	// Réaliser une démo HTML pour iPhone/iPad

	// Ajoute les règles de style de swipe.js
	function init() {
		var style = document.createElement("style");
		style.appendChild(document.createTextNode(""));
		document.head.appendChild(style);
		style.sheet.addRule(".swipe", "overflow: hidden; visibility: hidden; position: relative;");
		style.sheet.addRule(".swipe-wrap", "overflow: hidden; position: relative;");
		style.sheet.addRule(".swipe-wrap>div", "float:left; width:100%; position: relative;");

	    $(".swipe").each( function() {
	    	var $slider = $(this);

	    	$(this).children().wrapAll("<div class=\"swipe-wrap\"></div>");

		    // Adjust height according to first slide.
		    var itv = setInterval(function() {
		    	$slider.css("height", $slider.find(".swipe-wrap>div").eq(0).height());
		    }, 1500);

		    // https://github.com/bradbirdsall/Swipe
		    var swipe = new Swipe($slider[0], {
		        callback: function(index, elem) {
		        	if(itv) { clearInterval(itv); itv = null; }
		            $slider.height($(elem).height());
		        }
		    });
	    });		
	}

    // Liens
    /*
    $("body").on("click", "a", function() { 
    	var href = $(this).attr("href");
    	if(href && href.length > 1 && href.charAt(0) != "#") {
	    	$("body").load(href, init);
	    	return false;
    	}
    	return true;
    });
	*/

    init();
});