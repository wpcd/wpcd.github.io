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

		var map_markers = [{lat: 39.095963 , lng: -76.289063},
			{lat: 52.696361 , lng: -1.40625},
			{lat: 46.800059 , lng: 5.976563},
			{lat: 52.052490 , lng: 18.984375},
			{lat: 32.842674 , lng: -97.734375},
			{lat: 36.597889 , lng: -120.9375},
			{lat: -31.952162 , lng: 150.46875},
			{lat: -43.580391 , lng: 170.507813},
			{lat: 36.315125 , lng: 139.174805},
			{lat: 36.031332 , lng: 128.847656}];

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
	var divisor = 149.48096885813149;
	var count = Math.floor(diff/divisor);

	$(window).load(function() {
		$('#counter').text(count).css('visibility','visible').hide().fadeIn();

		$('.collapse').on('show.bs.collapse', function () {
			$(this).siblings('a').find('span').removeClass('arrow-right').addClass('arrow-down');
		}).on('hide.bs.collapse', function () {
			$(this).siblings('a').find('span').removeClass('arrow-down').addClass('arrow-right');
		});

		$('body').on('affix.bs.affix', function() {
			$(this).find('#about').css({'margin-top': 220});
		}).on('affix-top.bs.affix', function() {
			$(this).find('#about').css({'margin-top': ''});
		});
	});
})()
