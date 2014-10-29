(function() {
	function initialize() {
		var mapCanvas = document.getElementById('map_canvas');
		var mapOptions = {
			center: new google.maps.LatLng(18.646245 , -10.546875),
			zoom: 2,
			minZoom: 2,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			streetViewControl: false,
			scrollwheel: false
		};

		var map = new google.maps.Map(mapCanvas, mapOptions);

		var mapIcon = {
			url: '../images/sprite-2x/map-icon-2x.png',
			scaledSize: new google.maps.Size(30,48),
		}

		var map_markers = [{lat: -38.416097, lng: -63.616672},
			{lat: -25.274398, lng: 133.775136},
			{lat: 50.503887, lng: 4.469936},
			{lat: -14.235004, lng: -51.925280},
			{lat: 56.130366, lng: -106.346771},
			{lat: 35.126413, lng: 33.429859},
			{lat: 56.263920, lng: 9.501785},
			{lat: 61.924110, lng: 25.748151},
			{lat: 46.227638, lng: 2.213749},
			{lat: 51.165691, lng: 10.451526},
			{lat: 41.871940, lng: 12.567380},
			{lat: 23.634501, lng: -102.552784},
			{lat: 60.472024, lng: 8.468946},
			{lat: 39.399872, lng: -8.224454},
			{lat: 61.524010, lng: 105.318756},
			{lat: 40.463667, lng: -3.749220},
			{lat: 60.128161, lng: 18.643501},
			{lat: 55.378051, lng: -3.435973},
			{lat: 37.090240, lng: -95.712891}];

		for (x = 0; x < map_markers.length; x++) {
			new google.maps.Marker({
				position: new google.maps.LatLng(map_markers[x].lat, map_markers[x].lng),
				map: map,
				icon: mapIcon
			});
		}
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	var now = new Date();
	var then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0 , 0);
	var diff = (now.getTime() - then.getTime()) / 1000; // number of seconds in the day so far
	var divisor = 86400 / 905;  // number of seconds in 24hr divided by total number
	var count = Math.floor(diff/divisor); // count of how many things have happened so far today

	$(window).load(function() {
		$('#counter').text(count).css('visibility','visible').hide().fadeIn();
	});

	$(document).ready(function() {
		$('.collapse').on('show.bs.collapse', function () {
			$(this).siblings('a').find('span').removeClass('arrow-right').addClass('arrow-down');
		}).on('hide.bs.collapse', function () {
			$(this).siblings('a').find('span').removeClass('arrow-down').addClass('arrow-right');
		});

		$('body').on('affix.bs.affix', function() {
			$(this).addClass('fixed-header');
		}).on('affix-top.bs.affix', function() {
			$(this).removeClass('fixed-header');
		});

		$('header').affix({
			offset: {
				top: $('header .primary-nav').position().top - $('header .primary-nav').height()
			}
		});
	});
})();
