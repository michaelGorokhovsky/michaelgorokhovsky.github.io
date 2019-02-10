const appKey = "0f108bcb23bdf8c0704edce9f559c1ce";
var cF = true; //true is Celsius mode
let city = document.getElementById("city");
let tempCurr = document.getElementById("tempCurr");
let picWeather = document.getElementById("picWeather");
let humidityCurr = document.getElementById("humidityCurr");
let windSpeed = document.getElementById("windSpeed");
let searchButt = document.getElementById("searchButt");
let searchTxt = document.getElementById("searchTxt");
//let celFar = document.getElementById("celFar");
let tempH1 = document.getElementById("tempH1");
let tempH2 = document.getElementById("tempH2");
let tempH3 = document.getElementById("tempH3");
let tempH4 = document.getElementById("tempH4");
let tempH5 = document.getElementById("tempH5");
let timeH1 = document.getElementById("timeH1");
let timeH2 = document.getElementById("timeH2");
let timeH3 = document.getElementById("timeH3");
let timeH4 = document.getElementById("timeH4");
let timeH5 = document.getElementById("timeH5");
let dateD1 = document.getElementById("dateD1");
let tempD1 = document.getElementById("tempD1");
let dateD2 = document.getElementById("dateD2");
let tempD2 = document.getElementById("tempD2");
let dateD3 = document.getElementById("dateD3");
let tempD3 = document.getElementById("tempD3");
let dateD4 = document.getElementById("dateD4");
let tempD4 = document.getElementById("tempD4");
let dateD5 = document.getElementById("dateD5");
let tempD5 = document.getElementById("tempD5");
let celFar = document.getElementById("cFText");

/*
let temperature0 = document.getElementById("temp0");
let temperature1 = document.getElementById("temp1");
let temperature2 = document.getElementById("temp2");
let temperature3 = document.getElementById("temp3");
let temperature4 = document.getElementById("temp4");
let humidity = document.getElementById("humidity-div");
*/
searchButt.addEventListener("click", findWeatherDetails);
searchTxt.addEventListener("keyup", enter);
document.getElementsByClassName('switchOuter')[0].onclick = function() {
  cF = !cF;
  this.classList.toggle('on');
  findWeatherDetails();
}

function findWeatherDetails() {
	if (searchTxt.value == ""){
		alert("Please enter a city");
	}else {
		document.querySelector(".enterInfo").style.display = "none";
		document.querySelector(".displayInfo").style.display = "block";
		if (cF == true){
			let present = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTxt.value + "&appid="+appKey;
			let future = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTxt.value + "&appid="+appKey;
			httpRequestAsync(present, presentResponse);
			httpRequestAsync(future, futureResponse);
		} else {
			let present = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTxt.value + "&appid="+appKey + "&units=imperial";
			let future = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTxt.value + "&appid="+appKey + "&units=imperial";
			httpRequestAsync(present, presentResponse);
			httpRequestAsync(future, futureResponse);
		}
		}
	}
	
function enter(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function presentResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject);
  if (cF == true){
	  tempCurr.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
	  windSpeed.innerHTML = "Wind: " + parseInt(jsonObject.wind.speed * 3.6)+ "km/h";
  } else {
	  tempCurr.innerHTML = parseInt(jsonObject.main.temp) + "°";
	  windSpeed.innerHTML = "Wind: " + parseInt(jsonObject.wind.speed)+ "mph";
  }
  picWeather.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  humidityCurr.innerHTML = "Humidity: " + jsonObject.main.humidity + "%";
  city.innerHTML = jsonObject.name;
  if (cF == true){
	  celFar.innerHTML = "C";
  } else {
	  celFar.innerHTML = "F";
  }
  
  }
function futureResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject);
  console.log("aaa " + jsonObject.list[0].dt);
  if (cF == true){
	tempH1.innerHTML = parseInt(jsonObject.list[0].main.temp - 273) + "°";
	tempH2.innerHTML = parseInt(jsonObject.list[1].main.temp - 273) + "°";
	tempH3.innerHTML = parseInt(jsonObject.list[2].main.temp - 273) + "°";
	tempH4.innerHTML = parseInt(jsonObject.list[3].main.temp - 273) + "°";
	tempH5.innerHTML = parseInt(jsonObject.list[4].main.temp - 273) + "°";
	timeH1.innerHTML = returnTime(jsonObject.list[0].dt);
	timeH2.innerHTML = returnTime(jsonObject.list[1].dt);
	timeH3.innerHTML = returnTime(jsonObject.list[2].dt);
	timeH4.innerHTML = returnTime(jsonObject.list[3].dt);
	timeH5.innerHTML = returnTime(jsonObject.list[4].dt);
	dateD1.innerHTML = returnDate(jsonObject.list[7].dt);
	tempD1.innerHTML = parseInt(jsonObject.list[7].main.temp - 273) + "°";
	dateD2.innerHTML = returnDate(jsonObject.list[15].dt);
	tempD2.innerHTML = parseInt(jsonObject.list[15].main.temp - 273) + "°";
	dateD3.innerHTML = returnDate(jsonObject.list[23].dt);
	tempD3.innerHTML = parseInt(jsonObject.list[23].main.temp - 273) + "°";
	dateD4.innerHTML = returnDate(jsonObject.list[31].dt);
	tempD4.innerHTML = parseInt(jsonObject.list[31].main.temp - 273) + "°";
	dateD5.innerHTML = returnDate(jsonObject.list[37].dt);
	tempD5.innerHTML = parseInt(jsonObject.list[37].main.temp - 273) + "°";
  } else {
	tempH1.innerHTML = parseInt(jsonObject.list[0].main.temp) + "°";
	tempH2.innerHTML = parseInt(jsonObject.list[1].main.temp) + "°";
	tempH3.innerHTML = parseInt(jsonObject.list[2].main.temp) + "°";
	tempH4.innerHTML = parseInt(jsonObject.list[3].main.temp) + "°";
	tempH5.innerHTML = parseInt(jsonObject.list[4].main.temp) + "°";
	timeH1.innerHTML = returnTime(jsonObject.list[0].dt);
	timeH2.innerHTML = returnTime(jsonObject.list[1].dt);
	timeH3.innerHTML = returnTime(jsonObject.list[2].dt);
	timeH4.innerHTML = returnTime(jsonObject.list[3].dt);
	timeH5.innerHTML = returnTime(jsonObject.list[4].dt);
	dateD1.innerHTML = returnDate(jsonObject.list[7].dt);
	tempD1.innerHTML = parseInt(jsonObject.list[7].main.temp ) + "°";
	dateD2.innerHTML = returnDate(jsonObject.list[15].dt);
	tempD2.innerHTML = parseInt(jsonObject.list[15].main.temp) + "°";
	dateD3.innerHTML = returnDate(jsonObject.list[23].dt);
	tempD3.innerHTML = parseInt(jsonObject.list[23].main.temp) + "°";
	dateD4.innerHTML = returnDate(jsonObject.list[31].dt);
	tempD4.innerHTML = parseInt(jsonObject.list[31].main.temp) + "°";
	dateD5.innerHTML = returnDate(jsonObject.list[37].dt);
	tempD5.innerHTML = parseInt(jsonObject.list[37].main.temp) + "°";
  }
  
  /*
  cityName.innerHTML = jsonObject.city.name; 
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.list[0].weather[0].icon + ".png";
  temperature0.innerHTML = parseInt(jsonObject.list[0].main.temp - 273) + "°";
  temperature1.innerHTML = parseInt(jsonObject.list[1].main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.list[0].main.humidity + "%";
*/
  }
  function returnDate(input) {
	  var date = new Date(input * 1000);
	  return date.toDateString();
  }
function returnTime(input) {
	var time = new Date(input * 1000);
	var hours = time.getUTCHours();
	var minutes = "0" + time.getMinutes();
	if (hours == 12) {
		return hours + ':' + minutes.substr(-2) + "PM";
	}
	else if (hours > 12) {
		return hours - 12 + ':' + minutes.substr(-2) + "PM";
	} else {
		return finalTime = hours + ':' + minutes.substr(-2) + "AM";
	}
}
function httpRequestAsync(url, callback)
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

function formSub() {
	return false;
}