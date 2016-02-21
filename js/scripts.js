$(document).ready(function() {
	$('.item_left').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity: 1,
				left: "0px"
			}); // 1000
		});
	});
	$('.item_right').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity: 1,
				right: "0px"
			} ); // 1000
		});
	});
	$(window).bind('load', function() {
		parallaxInit();
	});

	function parallaxInit() {
		$('#one-parallax').parallax("30%", 0.1);
		$('#two-parallax').parallax("30%", 0.1);
		$('#three-parallax').parallax("30%", 0.1);
		$('#four-parallax').parallax("30%", 0.1);
		$('#five-parallax').parallax("30%", 0.1);
		$('#six-parallax').parallax("30%", 0.1);
		$('#seven-parallax').parallax("30%", 0.1);
	}(function() {
		var Core = {
			initialized: false,
			initialize: function() {
				if (this.initialized) return;
				this.initialized = true;
				this.build();
			},
			build: function() {
				this.animations();
			},
			animations: function() {
				$(".number-counters [data-to]").each(function() {
					var $this = $(this);
					$this.appear(function() {
						$this.countTo({});
					}, {
						accX: 0,
						accY: -150
					});
				});
			},
		};
		Core.initialize();
	})();
});

// Map JS
var center = "Ghana";
var locations = [
  ['28 Church Crescent Street North Labone, Ghana 6546987', "some info"],
  ['12372 Ivywood St. NW Coon Rapids MN, 55433', "some info"]
];


var geocoder;
var map;
var infoWin = new google.maps.InfoWindow();

function initialize() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(
    document.getElementById("map"));
  // center and zoom map on "center" address
  geocoder.geocode({
    address: center
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.fitBounds(results[0].geometry.bounds);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
  for (var i = 0; i < locations.length; i++) {
    codeAddress(locations[i], i);
  }

}

function codeAddress(location, i) {
  geocoder.geocode({
    'address': location[0]
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        title: "marker " + i,
        position: results[0].geometry.location
      });
      google.maps.event.addListener(marker, 'click', function(evt) {
        infoWin.setContent(location[0] + "<br>" + location[1]);
        infoWin.open(map, this);
      })
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

google.maps.event.addDomListener(window, "load", initialize);