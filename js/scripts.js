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