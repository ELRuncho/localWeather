$(document).ready(function(){
	var x = document.getElementById("data");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(putCoords);
		navigator.geolocation.getCurrentPosition(changeBackground);
	} else {
		x.innerHTML = "Geolocation not supported";
	}
	
	var url = ""
	function putCoords(position){
		url="https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude ;
		$.getJSON(url,function(json) {
			document.getElementById("ubicacion").innerHTML = json.name + ", " + json.sys.country;
			document.getElementById("temp").innerHTML = "Temp: "+ json.main.temp + "C | " + "Humidity: " + json.main.humidity+"% <br> Min: " + json.main.temp_min + "C | Max: " + json.main.temp_max + "C";
			document.getElementById("name").innerHTML = json.weather[0].description;
			document.getElementById("ican").src = json.weather[0].icon;
			
		});
	}
	function changeBackground(position){
		url="https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude ;
			var x
		$.getJSON(url,function(json) {
			x=json.main.temp;
		});
		if(x<=16){
  			$('.transform').toggleClass('transform-cold');
		}else if (16<x<=25) {
			$('.transform').toggleClass('transform-warm');
		}else if (25<x<=30) {
			$('.transform').toggleClass('transform-hot');
		}else if (30<x) {
			$('.transform').toggleClass('transform-veryhot');
		}
	}
});
