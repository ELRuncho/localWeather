var x = document.getElementById("demo");

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
			navigator.geolocation.getCurrentPosition(putCoords);
		} else {
			x.innerHTML = "Geolocation not supported";
		}
	}

	function showPosition(position) {
		x.innerHTML = "Latitude: " + position.coords.latitude + 
    	"<br>Longitude: " + position.coords.longitude;
	}
var url = ""
	function putCoords(position){
		url="https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude ;
	}
var iconurl="";
$(document).ready(function(){
	$("#getData").on("click", function(){
		$.getJSON(url,function(json) {
			document.getElementById("ican").src = json.weather[0].icon;
		});
	});
});	
