

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
		onSlideChangeEnd: function(sw){
			$("#header").toggleClass("header");
			$("#footer").toggleClass("footer");
			//etc..
		}
	});

	var radarChartData = {
		labels: ["81款保险产品", "8款贷款产品", "7款存款产品", "6款基金产品", "1439款理财产品", "169款信托产品"],
		
		datasets: [
			{
				label: "My First dataset",
            fillColor: "rgba(82,82,82,0)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
				data: [81,81,71,67,59,69]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: true,
			scaleLineColor: "#fff",
			angleLineColor: "#fff",
		});
	}

 	

 }).call(this);