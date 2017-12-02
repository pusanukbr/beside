$(document).ready(function() {
	// Window height
	function heightDetect() {
		$("#main_header").css("min-height", $(window).height() + 100);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});



	// Slick================

	// Иниализация слайдера header
	$('.siema').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 300,
		draggable: false

	});
	// Изменение ДО сменны слайда
	$('.siema').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		if (currentSlide == 0) {
			$("#main_header, .header_menu").css({ 'background-color': "#5CA5A5", "transition": "all .4s" });
		} else {
			$("#main_header, .header_menu").css({ 'background-color': "#F7B132", "transition": "all .4s" });
		}
	});



	// Иниализация слайдера projects
	$('.slick').slick({
		speed: 300,
		draggable: false

	});


	// Плавный скролл
	$(function() {
		$('a[href*=#]:not([href=#])').bind('click', function(event) {
			var $anchor = $(this);
			$("html, body").stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	//  Data
	var Dataget = document.getElementById('data'),
		SummSumm = "&#160;" + new Date().getFullYear();
	Dataget.innerHTML = SummSumm;

});

//Google map
function initMap() {
	var coordinates = { lat: 50.878601, lng: 30.269571 },
		map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates,
			disableDefaultUI: true,
			zoom: 12,
			styles: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#212121"
					}]
				},
				{
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#212121"
					}]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "administrative.country",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#181818"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1b1b1b"
					}]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#2c2c2c"
					}]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#8a8a8a"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"color": "#373737"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#3c3c3c"
					}]
				},
				{
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry",
					"stylers": [{
						"color": "#4e4e4e"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#000000"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#3d3d3d"
					}]
				}
			]
		});
	marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: "../img/marker.png"
	});

};


var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
	el.style.opacity = 1;
	var interhellopreloader = setInterval(function() {
		el.style.opacity = el.style.opacity - 0.05;
		if (el.style.opacity <= 0.05) {
			clearInterval(interhellopreloader);
			hellopreloader.style.display = "none";
		}
	}, 16);
}

window.onload = function() {
	setTimeout(function() {
		fadeOutnojquery(hellopreloader);
	}, 1000);

};