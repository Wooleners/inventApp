/****************************************************************
 * 		 main modules
 * 		 @by   wooleners
 * 		 @time 2015-03-31 16:58:50
 *****************************************************************/
 
 (function(){

 	"use strict";

	var mySwiper = new Swiper('.swiper-container', {
		//Your options here:
		mode: 'horizontal',
		direction: 'vertical',
		followFinger: false,
		resistance: "100%",
		slidesPerView: "auto",
		moveStartThreshold: 80,
		speed: 1e3
	});

	var radarChartData = {
		labels: ["81款保险产品", "8款贷款产品", "7款存款产品", "6款基金产品", "1439款理财产品", "169款信托产品"],
		
		datasets: [
			{
				label: "My First dataset",
            fillColor: "rgba(100, 100, 100, 0.8)",
            strokeColor: "rgba(0,0,0,0)",
            pointColor: "#ff6600",
            pointStrokeColor: "#ff6600",
            pointHighlightFill: "#000",
            pointHighlightStroke: "rgba(220,220,220,1)",
				data: [81,8,7,6,439,169]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: true,
			scaleLineColor: "#fff",
			angleLineColor: "#fff",
			showTooltips: false,
			    pointLabelFontFamily : "'Arial'",
			    //String - Point label font weight
			    pointLabelFontStyle : "normal",
			    //Number - Point label font size in pixels
			    pointLabelFontSize : 15,
			    //String - Point label font colour
			    pointLabelFontColor : "#fff"
		});
	}

 	

 }).call(this);