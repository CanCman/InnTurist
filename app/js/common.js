$(function() {

	var saved_width = $(window).width();

	$(document).ready(function(){

	mediaMenuSecond();
	myScroll();
	findHeightImageCatalog();
	 $(".catalog").find(".col-sm-5:first").click(function() {
 	showRoomInfo(this)
 });

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

		var owl = $(".comment-slider").owlCarousel(
		{
			margin:30,
			nav:true,
			dots:true,
			responsive:{
				0:{items:1},
				760:{items:2},
				1200:{items:3}
			},
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		});

		$(".owl-carousel").each(function(indx, elem) {
			$(elem).owlCarousel({
				autoplay: true,
				loop: true,
				items: 1,
				nav: false,
				dots: false
			});
		});

		!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

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


// $(".top-menu li").


var target = $(".target");
var links = $(".mynav a");
var links_cur = $(".mynav .current a ");
var cur = $(".target-current");

var width = links_cur.width();
var height = links_cur.height();
var left = $(links_cur).offset().left - $(links_cur).parent().parent().offset().left;
var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 30;
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
	if (!$(this).parent().hasClass("active")) {
		$(links).each(function(indx, elem){
			if ($(elem).parent().hasClass("active")) {
				$(elem).parent().removeClass("active");
			}
		});
	}

	$(this).parent().addClass("active");
      // this.style.opacity = "1";

      var width = this.getBoundingClientRect().width;
      var height = this.getBoundingClientRect().height;
      // var pos =  offsetPosition(this);
      // var posp =  offsetPosition($(this).parent().parent()[0]);

      var left = $(this).offset().left - $(this).parent().parent().offset().left;
      var top = $(this).offset().top - $(this).parent().parent().offset().top + 30;

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
    	var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 30;
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

    	if (active) {
    		var left = $(links_cur).offset().left - $(links_cur).parent().parent().offset().left;
    		var top = $(links_cur).offset().top - $(links_cur).parent().parent().offset().top + 30;

    		target.style.left = left;
    		target.style.top = top + 'px';
    	}
    }

    $(links).on("mouseover", mouseenterFunc);
    $(".top-menu").on("mouseleave", mouseoutFunc);
    window.addEventListener("resize", resizeFunc);

    window.onscroll = function() {myScroll();}

    function myScroll() {
    	var toTop = document.documentElement.clientHeight - 78;
    	var range = document.documentElement.scrollTop - toTop
    	var shift = document.documentElement.clientHeight + range
    	function down() {

    	} 
    	if (document.documentElement.scrollTop > toTop && document.documentElement.clientWidth > 768) {
    		$(".top-menu-second").slideDown(300); 
     // if (range <= 50 && range > 0) $('html, body').animate({scrollTop: document.documentElement.clientHeight}, 200);
   } else {
   	$(".top-menu-second").slideUp(300); 
   }
 }

 $('#slideDown').click(function(e) {
 	e.preventDefault();
 	var top = document.documentElement.clientHeight;
 	$('body,html').animate({scrollTop: top-75},
 		{ duration: 500, 
 			specialEasing: { scrollTop: 'swing' }
 		});
 });

 $(window).resize(function(){
 	mediaMenuSecond();
 	findHeightImageCatalog();
 	showRoomInfo(null);
 });

 $(".open-popup-link").magnificPopup({
 	type:'inline',
 	closeOnBgClick: false,
 })

// $("#more-popup").find(".btn").click(function() {
// 	$(".fotorama").fotorama({
// 		nav: 'none'
// 	});
// })

});




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
 }

function findHeightImageCatalog() {
	var catalog = $(".catalog")
	if (catalog.length != 0) {
		if (document.documentElement.clientWidth > 768) {
			var height = catalog.find(".col-sm-5:eq(1)").outerHeight(true);
			if (height > 300) catalog.find(".col-sm-5:first").css("height", height)
				else catalog.find(".col-sm-5:first").css("height", 300);
		} else catalog.find(".col-sm-5:first").css("height", 300);
	}
}



function showRoomInfo(elem) {
	if (elem == null && $(window).width() != saved_width) {
		elem = $(".catalog").find(".col-sm-5:first");
    if (document.documentElement.clientWidth > 768) {
			$(elem).parent().children(":not(:first)").slideDown();
			$(elem).find(".info").slideUp();
			$(elem).find(".address").slideUp();
			$(elem).parent().find(".reserve").slideUp();
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





});


