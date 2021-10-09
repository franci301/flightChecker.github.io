const data = null;

const xhr = new XMLHttpRequest();
xhr.overrideMimeType('json');
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// console.log(this.responseText);
		var jsonResponse = JSON.parse(this.responseText)
		console.log(jsonResponse);
	}
});



function insertIntoCall(departureAirport,destinationAirport,outBoundDate,countryUserIn,currency){
	var default_api = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0";
	xhr.open("GET", default_api+"/"+ countryUserIn+ "/" + currency + "/" +"en-GB/"+ departureAirport+ "/" + destinationAirport + "/" + outBoundDate+ "/",true);
	xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "537304ce88msh64b748587b2bff9p141963jsn8ffdcf503ffd");
	xhr.send(data);
}

function getAll(){
	var departureAirport = document.getElementById('departureAirport').value;
	var destinationAirport = document.getElementById('destinationAirport').value;
	var outBoundDate = document.getElementById('outBoundDate').value;
	var countryUserIn = "GB";
	var currency = "GBP" //update to allow user to select own currency

	var departureAirportCode = "";
	destinationAirportCode = "";

	console.log(departureAirport);
	console.log(destinationAirport);
	console.log(outBoundDate);

	for (let index = 0; index < departureAirport.length; index++) {
		if (departureAirport[index] == " ") {
			break;
		}
		else{
			departureAirportCode += departureAirport[index];
			destinationAirportCode += destinationAirport[index];
		}
		
	}
	console.log(departureAirportCode.length);
	departureAirportCode  += "-sky";
	destinationAirportCode += "-sky"

	insertIntoCall(departureAirportCode,destinationAirportCode,outBoundDate,countryUserIn,currency);
}



