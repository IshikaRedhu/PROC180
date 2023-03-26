let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);
	var img1 = document.querySelector("#tajMahak")

	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([78.0421, 27.1751])
		.addTo(map);
	
	var img2 = document.querySelector("#redFort")
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([ 77.2410,28.6562])
		.addTo(map);
	
	var img3 = document.querySelector("#sunTemple")
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([86.0945,19.8876])
		.addTo(map);

}