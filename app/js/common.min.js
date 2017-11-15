


$(function() {

	function magnificPopupInitialize() {
		$(".open-popup-link").magnificPopup({
			  items: {
		    src: '#more-popup',
		    type: 'inline'
		},
			closeOnBgClick: false,
			fixedContentPos: true,
		});
	}

	function mmenuInitialize() {
		$("#menu").mmenu({
			"setSelected": {
				"hover": true,
				"parent": true
			},
			"offCanvas": {
				"position": "bottom",
				"zposition": "top"
			},
			"extensions": [
			"pagedim-black",
			"theme-dark"
			]
		});
	}

	function animateInitialize() {
		// animated 
		(function($) {
			$.fn.animated = function(inEffect) {
				$(this).each(function() {
					var ths = $(this);
					ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
							ths.addClass(inEffect).css("opacity", "1");
						};
					}, {
						offset: "90%"
					});

				});
			};
		})(jQuery);

		$(".pathClient .col-sm-4").animated("fadeInLeft");
		$(".rooms .col-sm-4").animated("zoomInUp");
		$(".sign").animated("fadeIn");
		// $(".businessman").animated("fadeIn");
		$(".advantage .row").animated("fadeIn");
	}

	function headerNavInitialize() {
		var target = $(".target");
		var links = $(".mynav a");
		var links_cur = $(".mynav .current a ");
		var cur = $(".target-current");

		var width = links_cur.width();
		var height = links_cur.height();
		var left = $(links_cur).offset().left - $(links_cur).parent().parent().offset().left;
		var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 28.5;
		cur.css("width", width);
		cur.css("height", height);
		cur.css("left", left);
		cur.css("top", top);
		cur.css("transform", "none");
		cur.css("borderColor", "rgba(61, 155, 233, 0.28)");
		target.css("width", width);
		target.css("height", height);
		target.css("left", left);
		target.css("top", top);
		target.css("transform", "none");
		target.css("borderColor", "#3D9BE9");

		function mouseenterFunc() {
			var elem = $(this);
			if (!elem.parent().hasClass("active")) {
				links.each(function(indx, elem){
					var elem = $(elem);
					if (elem.parent().hasClass("active")) {
						elem.parent().removeClass("active");
					}
				});
			}

			elem.parent().addClass("active");

		  var width = this.getBoundingClientRect().width;
		  var height = this.getBoundingClientRect().height;

		  var left = $(this).offset().left - $(this).parent().parent().offset().left;
		  var top = $(this).offset().top - $(this).parent().parent().offset().top + 28.5;

		  target.css("width", width);
		  target.css("height", height);
		  target.css("left", left);
		  target.css("top", top);
		  target.css("transform", "none");
		  target.css("borderColor", "#3D9BE9");
		}

    function mouseoutFunc() {
    	var width = links_cur.width();
    	var height = links_cur.height();
    	var left = $(links_cur).offset().left - $(links_cur).parent().parent().offset().left;
    	var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 28.5;
    	cur.css("width", width);
    	cur.css("height", height);
    	cur.css("left", left);
    	cur.css("top", top);
    	cur.css("transform", "none");
    	cur.css("borderColor", "rgba(61, 155, 233, 0.28)");
    	target.css("width", width);
    	target.css("height", height);
    	target.css("left", left);
    	target.css("top", top);
    	target.css("transform", "none");
    	target.css("borderColor", "#3D9BE9");
    }

    function resizeFunc() {
    	var active = document.querySelector(".mynav li.active");
    	var target = $(".target");
			var links_cur = $(".mynav .current a ");

    	if (active) {
    		var left = $(links_cur).offset().left - $(links_cur).parent().parent().offset().left;
    		var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 38.5;

    		target.style.left = left + 'px';
    		target.style.top = top + 'px';
    	}
    }

    links.on("mouseover", mouseenterFunc);
    $(".top-menu").on("mouseleave", mouseoutFunc);
    window.addEventListener("resize", resizeFunc);
    
	}

	function hiddenHeadMenuCheck() {
		var toTop = document.documentElement.clientHeight - 78;
		var scrollTop = document.documentElement.scrollTop;
		var topMenuSecond = $(".top-menu-second");
		if (document.documentElement.clientWidth > 768) {
			var catalogNav = $(".catalog-nav")
			if (catalogNav.is(":visible")) {
				var slider = $(".cd-hero");
				var sliderTop = slider.offset()
				var heightSlider = sliderTop.top + slider.height();
				var heightCatalogNav = 78;
				if (scrollTop > heightSlider - heightCatalogNav) {
					topMenuSecond.slideDown(300);
					catalogNav.css({"position":"fixed", "top":"78px"});
				} else {
					catalogNav.css({"position":"absolute", "top":"initial"});
					topMenuSecond.slideUp(300); 
				}
			} else {
				if (scrollTop > toTop) {
					topMenuSecond.slideDown(300);
			  } else {
			   	topMenuSecond.slideUp(300); 
			  }
		  }
		}
	}

	function indexSlideDownButtonInitialize() {
		$('#slideDown').click(function(e) {
			e.preventDefault();
			var top = document.documentElement.clientHeight;
			$('body,html').animate({scrollTop: top-75},
				{ duration: 500, 
					specialEasing: { scrollTop: 'swing' }
				});
		});
	}


	function mediaMenuSecond() {
		var widthScreen = document.documentElement.clientWidth;
		var menu = $(".top-menu-second");
		var block = menu.find(".row").children("div");
		var about = $(".about-us");
		if (widthScreen < 1200) {
			menu.css("padding",0);
			block.css("padding",0).each(function(index, elem){
				if (index == 0) $(elem).removeClass('col-sm-offset-1').removeClass('col-sm-3').addClass('col-sm-4');
				if (index == 1) $(elem).removeClass('col-sm-2').css({"padding": "0"}).addClass('col-sm-4');
				if (index == 2) $(elem).removeClass('col-sm-3').addClass('col-sm-4');
				if (index == 3) $(elem).css('display','none');
			});
			block.find("li").css("font-size","14px");
			about.find(".col-sm-9").removeClass("col-sm-9").addClass("col-sm-10");
			about.find(".sign").css("right", "-7px");
		} else {
			menu.css("padding-right","20px");
			block.css({"padding": "0 15px"}).each(function(index, elem){
				if (index == 0) $(elem).addClass('col-sm-offset-1 col-sm-4');
				if (index == 1) $(elem).addClass('col-sm-2').css({"padding": "0"}).removeClass('col-sm-4');
				if (index == 2) $(elem).addClass('col-sm-3').removeClass('col-sm-4');
				if (index == 3) $(elem).css('display','block');
			});
			block.find("li").css("font-size","15px");
			about.find(".col-sm-10").removeClass("col-sm-10").addClass("col-sm-9");
			about.find(".sign").css("right", "50px");
		}
		if (widthScreen < 992) {
			$("section.rooms").find(".room").click(function(){
				var id = $(this).attr("id");
				window.location.replace(window.location.href + "#"+id);
				window.location.reload(true);
			});
			about.find(".col-sm-10").removeClass("col-sm-offset-2").removeClass("col-sm-10").addClass("col-sm-12");
			about.find(".col-sm-9").removeClass("col-sm-offset-2").removeClass("col-sm-10").addClass("col-sm-12");
		}
		else {
			$(".room").unbind();
			about.find(".col-sm-12").removeClass("col-sm-12").addClass("col-sm-10 col-sm-offset-2");
		}
		if (widthScreen < 480) {
			$(".open-popup-link").click(function() {
			setTimeout(function() {
				$(".fotorama").fotorama({
				nav: 'none',
				height: 'auto',
				});
				$(document).on("click", ".fotorama__fullscreen-icon", function() {
					if ($(this).attr("check")) {
						$("body").css("height", "inherit");
						$(this).attr("check", false);
					} else {
						$("body").css("height", $(this).outerHeight()+"px");
						$(this).attr("check", true);
					}
					});
				}, 100);
			});
		}
	}

	//catalog
	function findHeightImageCatalog() {
		var elem = $(this);
		var catalog = $(".catalog")
		if (catalog.length != 0) {
			catalog.find(".room").each(function(indx,elem) {
				var elem = $(elem);
				if (document.documentElement.clientWidth > 768) {
					var height = elem.find(".col-sm-5:eq(1)").outerHeight(true);
					var firstCol = elem.find(".col-sm-5:first");
					if (height > 300) firstCol.css("height", height)
						else firstCol.css("height", 300);
				} else firstCol.css("height", 300);
			});
		}
	}

	//resizeFix
	var saved_width = $(window).width();

	function showRoomInfo(elem) {
		if (elem == null && $(window).width() != saved_width) {
			elem = $(".catalog").find(".col-sm-5:first");
	    if (document.documentElement.clientWidth > 768) {
				$(elem).parent().children(":not(:first, .reserve)").slideDown();
				$(elem).find(".info").slideUp();
				$(elem).find(".address").slideUp();
				var res = $(elem).parent().find(".reserve");
				if (res.css("display") == "inline-block")
					res.slideUp();
		} else {
				$(elem).parent().children(":not(:first)").slideUp();
				$(elem).find(".info").slideDown();
				$(elem).find(".address").slideDown();
			}
		} else {
				if (document.documentElement.clientWidth < 768) {
					$(elem).parent().children(":not(:first)").slideToggle();
					$(elem).find(".info").slideToggle();
					$(elem).find(".address").slideToggle();
				}
		saved_width = $(window).width();
		}
	}

	function fixMobileFotorama() {
	if ($("body").hasClass("fullscreen") && 
				document.documentElement.clientWidth < 480)
		$(".fotorama__stage").css("height", $(window).outerHeight());
	}

	function smoothSlideToBlock() {
    $(".catalog-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 130}, 1000);
		});
	}

	function owlInitialize () {

		//owl
		var timerInterval;
		var timerIntervalArray = [];
		var currentElem;
		var timerOn = 0;
		var timerScroll = null;
		var owlHover = 0;
		var owl = $(".owl-carousel");

		//index comments
		$(".comment-slider").owlCarousel(
		{
			margin:30,
			nav:true,
			dots:true,
				// autoplay: false,
				responsive:{
					0:{items:1},
					760:{items:2},
					1200:{items:3}
				},
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			});

		//rooms sliders

		owl.each(function(indx, elem) {
			$(elem).owlCarousel({
				autoplay: false,
				autoplayHoverPause: true,
				autoplayTimeout: 2000,
				loop: true,
				items: 1,
				nav: false,
				dots: false
			});
		});

		//fix scroll define cursor slider
		$(window).scroll(function () {
		 if (timerScroll) {
		    clearTimeout(timerScroll);
		  }

		  timer = setTimeout(function() {
		    timerScroll = null;
					$(".room.row").each(function(indx, elem) {
						if($(elem).is(":hover")) {
							if (currentElem != elem) {
								leaveOwl ();
								enterOwl (elem);
							}
							return false;
						}
					});
			}, 50);
		});

		//stop autoplay at hovered owl
		owl.hover(
			function() {
				owlHover = 1;
				leaveOwl ();
			},
			function() {
				owlHover = 0;
				var room = $(this).closest(".room")[0];
				enterOwl (room);
			});

		$(".catalog").find(".room").hover(
			function (){
				enterOwl (this);
		},
			function (){
				leaveOwl ();
		});

		//event on hover
		function enterOwl (elem) {
			if (timerOn == 0 && owlHover == 0) {
				currentElem = elem;
				timerInterval = setInterval(function(owl) {
					$(owl).find('.owl-carousel').trigger('next.owl.carousel');
				}, 2000, elem);
				timerIntervalArray.push(timerInterval);
				timerOn = 1;
			} else {
				if (owlHover == 1) {
					currentElem = null;
					$(timerIntervalArray).each(function(i) {
						clearInterval(timerIntervalArray[i]);
					})
					timerIntervalArray = [];
					timerOn = 0;
				}
			}
		}

		function leaveOwl () {
			if (timerOn == 1) {
				currentElem = null;
				$(timerIntervalArray).each(function(i) {
					clearInterval(timerIntervalArray[i]);
				})
				timerIntervalArray = [];
				timerOn = 0;
			}
		}


	}

	$(document).ready(function(){


		mediaMenuSecond();
		hiddenHeadMenuCheck();
		findHeightImageCatalog();
		$(".catalog").find(".col-sm-5:first").click(function() {
			showRoomInfo(this);
		});

		magnificPopupInitialize();
		mmenuInitialize();
		animateInitialize();
		headerNavInitialize();
		owlInitialize();

		indexSlideDownButtonInitialize();

		smoothSlideToBlock();


		var timer = null;
		$(window).scroll(function() {
		  if (timer) {
		    clearTimeout(timer);
		  }

		  timer = setTimeout(function() {
		    timer = null;
				hiddenHeadMenuCheck();
		  }, 50);
		});

		$(window).resize(function(){
			mediaMenuSecond();
			findHeightImageCatalog();
			showRoomInfo(null);
			fixMobileFotorama();
		});

	});
});