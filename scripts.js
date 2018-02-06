var iconurl="";
$(document).ready(function(){
	var x = document.getElementById("data");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(putCoords);
	} else {
		x.innerHTML = "Geolocation not supported";
	}
	
	var url = ""
	function putCoords(position){
		url="https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude ;
		$.getJSON(url,function(json) {
			document.getElementById("ubicacion").innerHTML = json.name;
			document.getElementById("temp").innerHTML = json.main.temp;
			document.getElementById("name").innerHTML = json.weather[0].description;
			document.getElementById("ican").src = json.weather[0].icon;
		});
	}
});	
