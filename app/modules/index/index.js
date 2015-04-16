/****************************************************************
 * 		 main modules
 * 		 @by   wooleners
 * 		 @time 2015-03-31 16:58:50
 *****************************************************************/

(function() {

	"use strict";

	var mySwiper = new Swiper('.swiper-container', {
		//Your options here:
		mode: 'horizontal',
		direction: 'vertical',
		followFinger: false,
		resistance: "100%",
		slidesPerView: "auto",
		moveStartThreshold: 80,
		speed: 1e3,
		onSlideChangeEnd: function(sp) {
			sp.activeIndex == 4 ? callPie() : false;
		}
	});

	var radarChartData = {
		labels: ["81款保险产品", "8款贷款产品", "7款存款产品", "6款基金产品", "1439款理财产品", "169款信托产品"],

		datasets: [{
			label: "My First dataset",
			fillColor: "rgba(100, 100, 100, 0.8)",
			strokeColor: "rgba(0,0,0,0)",
			pointColor: "#ff6600",
			pointStrokeColor: "#ff6600",
			pointHighlightFill: "#000",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [81, 8, 7, 6, 439, 169]
		}]
	};

	window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
		responsive: true,
		scaleLineColor: "#fff",
		angleLineColor: "#fff",
		showTooltips: false,
		pointLabelFontFamily: "'Arial'",
		//String - Point label font weight
		pointLabelFontStyle: "normal",
		//Number - Point label font size in pixels
		pointLabelFontSize: 15,
		//String - Point label font colour
		pointLabelFontColor: "#fff"
	});

	var doughnutData = [

		{
			value: 580,
			color: "rgb(252,78,10)",
		}, {
			value: 420,
			color: "#fff",
		},

	];

	var doughnutData2 = [

		{
			value: 58,
			color: "rgb(172,55,8)"
		}, {
			value: 42,
			color: "rgb(174,173,174)"
		},

	];

	var doughnutData3 = [

		{
			value: 100,
			color: "rgb(252,78,10)"
		}

	];

	function callPie() {
		var ctx = document.getElementById("chart-area-wrap").getContext("2d"),
			ctx2 = document.getElementById("chart-area-outer").getContext("2d"),
			ctx3 = document.getElementById("chart-area-inner").getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
			responsive: false,
			percentageInnerCutout: 75,
			segmentStrokeColor: "rgba(0,0,0,0)",
			showTooltips: false
		});
		window.myDoughnut2 = new Chart(ctx2).Doughnut(doughnutData2, {
			responsive: false,
			segmentStrokeColor: "rgba(0,0,0,0)",
			percentageInnerCutout: 75,
			showTooltips: false
		});
		window.myDoughnut3 = new Chart(ctx3).Pie(doughnutData3, {
			responsive: false,
			segmentStrokeColor: "rgba(0,0,0,0)",
			animationSteps: 100,
			//String - Animation easing effect
			//animationEasing: "easeOutBounce",
			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: false,
			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false,
			showTooltips: false
		});



	}



}).call(this);