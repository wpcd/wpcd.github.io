var addthis_share = {
	url: "http://worldpancreaticcancer.org",
	description: "Pancreatic cancer doesn’t have to remain one of the world’s deadliest cancers. Together, we can keep more people from becoming a statistic. By supporting research for early detection and innovative treatments, you can help us change the future and save the lives of millions. World Pancreatic Cancer Day is a chance for each of us to lend our voices to bring awareness to this disease. Post it, tweet it, share it, but don’t let those affected continue to go unnoticed.",
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
		};

		var infoWindow = new google.maps.InfoWindow({
			maxWidth: 300
		});

		var locations = [{
			title: "The ARCAD Foundation",
			url: "http://www.fondationarcad.org",
			lat: 48.850688,
			lng: 2.379004
		}, {
			title: "Association Against Cancer",
			url: "http://www.amlcc.org",
			lat: 19.4057126,
			lng: -99.1626228
		}, {
			title: "Avner Nahmani Pancreatic Cancer Foundation",
			url: "http://www.avnersfoundation.org.au",
			lat: -37.81152,
			lng: 144.9774
		}, {
			title: "Cancer Society of Finland",
			url: "http://www.cancer.fi",
			lat: 60.166374,
			lng: 24.951053
		}, {
			title: "Craig’s Cause Pancreatic Cancer Society",
			url: "http://www.craigscause.ca",
			lat: 45.945428,
			lng: -66.640698
		}, {
			title: "Europacolon and Digestive Cancers",
			url: "http://www.europacolon.pt",
			lat: 41.179507,
			lng: -8.589884
		}, {
			title: "European Cancer Patient Coalition",
			url: "http://www.ecpc.org",
			lat: 50.8410437,
			lng: 4.3715648
		}, {
			title: "FAVO",
			url: "http://www.favo.it",
			lat: 41.9042511,
			lng: 12.4902286
		}, {
			title: "Foundation ACIAPO",
			url: "http://www.fundacionaciapo.org.ar",
			lat: -34.477575,
			lng: -58.509667
		}, {
			title: "GEPAC",
			url: "http://www.gepac.es",
			lat: 40.416534,
			lng: -3.711984
		}, {
			title: "Hirshberg Foundation for Pancreatic Cancer Research",
			url: "http://www.pancreatic.org",
			lat: 34.0276968,
			lng: -118.428548
		}, {
			title: "Instituto Oncoguia",
			url: "http://www.oncoguia.org.br",
			lat: -23.580532,
			lng: -46.596419
		}, {
			title: "Kraeftens Bekaempelse",
			url: "http://www.cancer.dk",
			lat: 55.70255,
			lng: 12.586171
		}, {
			title: "Kreftforeningen",
			url: "http://kreftforeningen.no",
			lat: 63.896877,
			lng: 12.136724
		}, {
			title: "The Lustgarten Foundation",
			url: "http://www.lustgarten.org",
			lat: 40.7613229,
			lng: -73.4947704
		}, {
			title: "Movement Against Cancer",
			url: "http://www.ravnoepravo.ru",
			lat: 55.761126,
			lng: 37.457876
		}, {
			title: "National Pancreas Foundation",
			url: "http://www.pancreasfoundation.org",
			lat: 38.9844228,
			lng: -77.0959967
		}, {
			title: "Natverk Mot Cancer",
			url: "http://www.natverketmotcancer.se",
			lat: 59.337239,
			lng: 18.069483
		}, {
			title: "Norsk Gastro Intestinal Cancer Gruppe",
			url: "http://www.ngicg.no",
			lat: 59.936848,
			lng: 10.737276
		}, {
			title: "PanCAN Japan",
			url: "http://www.pancan.jp",
			lat: 33.901413,
			lng: -118.387441
		}, {
			title: "Pancare Foundation",
			url: "http://www.pancare.org.au",
			lat: -37.754114,
			lng: 145.054747
		}, {
			title: "Pancreatic Cancer Action",
			url: "http://pancreaticcanceraction.org",
			lat: 51.0779316,
			lng: -0.7918321
		}, {
			title: "Pancreatic Cancer Action Network",
			url: "http://www.pancan.org",
			lat: 33.9013654,
			lng: -118.387381
		}, {
			title: "Pancreatic Cancer Canada",
			url: "http://www.pancreaticcancercanada.ca",
			lat: 45.352632,
			lng: -75.646871
		}, {
			title: "Pancreatic Cancer Research Fund",
			url: "http://www.pcrf.org.uk/",
			lat: 51.6329455,
			lng: -0.0993699
		}, {
			title: "Pancreatic Cancer Scotland",
			url: "http://www.pancreaticcancerscotland.com",
			lat: 55.865004,
			lng: -4.232537
		}, {
			title: "Pancreatic Cancer UK",
			url: "http://www.pancreaticcancer.org.uk",
			lat: 51.4878286,
			lng: -0.1234314
		}, {
			title: "PASYKAF",
			url: "http://pasykaf.org",
			lat: 35.158907,
			lng: 33.352743
		}, {
			title: "Rolfe Pancreatic Cancer Foundation",
			url: "http://www.rolfefoundation.org",
			lat: 41.8826707,
			lng: -87.6274443
		}, {
			title: "TEB e.V. Selbshilfe",
			url: "http://www.teb-selbsthilfe.de",
			lat: 48.89067,
			lng: 9.195465
		}];

		var marker, markers = new Array();

		for (x = 0; x < locations.length; x++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[x].lat, locations[x].lng),
				map: map,
				icon: mapIcon
			});

			markers.push(marker);

			google.maps.event.addListener(markers[x], 'click', (function(marker, x) {
				return function() {
					var content = '<div class="map_marker"><h3><a href="'+locations[x].url+'" target="_blank">'+locations[x].title+'</a></h3></div>'
					infoWindow.setContent(content);
					infoWindow.open(map, marker);
				}
			})(marker, x));
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
