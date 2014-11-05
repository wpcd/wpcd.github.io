var addthis_share = {
	templates: {
		twitter: 'Nov. 13 is the first-ever World Pancreatic Cancer Day. Join me in raising awareness around the world. {{url}} #WPCD2014'
	}
};

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

		var map_markers = [{lat: 48.850688, lng: 2.379004},
			{lat: 19.4057126, lng: -99.1626228},
			{lat: -37.81152, lng: 144.9774},
			{lat: 60.166374, lng: 24.951053},
			{lat: 45.945428, lng: -66.640698},
			{lat: 41.179507, lng: -8.589884},
			{lat: 41.9042511, lng: 12.4902286},
			{lat: -34.477575, lng: -58.509667},
			{lat: 40.416534, lng: -3.711984},
			{lat: 34.0276968, lng: -118.428548},
			{lat: -23.580532, lng: -46.596419},
			{lat: 55.70255, lng: 12.586171},
			{lat: 63.896877, lng: 12.136724},
			{lat: 40.7613229, lng: -73.4947704},
			{lat: 55.761126, lng: 37.457876},
			{lat: 38.9844228, lng: -77.0959967},
			{lat: -37.754114, lng: 145.054747},
			{lat: 51.0779316, lng: -0.7918321},
			{lat: 33.9013654, lng: -118.387381},
			{lat: 45.352632, lng: -75.646871},
			{lat: 55.865004, lng: -4.232537},
			{lat: 51.4878286, lng: -0.1234314},
			{lat: 41.8826707, lng: -87.6274443},
			{lat: 48.89067, lng: 9.195465}];

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
			$(this).addClass('header-affixed');
		}).on('affix-top.bs.affix', function() {
			$(this).removeClass('header-affixed');
		});

		$('header').affix({
			offset: {
				top: $('header .primary-nav').position().top - $('header .primary-nav').height()
			}
		});
	});
})();
