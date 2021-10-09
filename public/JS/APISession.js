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


var default_api = "https://partners.api.skyscanner.net/apiservices/pricing/v1.0/UK/GBP/en-GB/iata/FLR/LHR/2021-10-10/2";
xhr.open("POST",default_api,true);
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "537304ce88msh64b748587b2bff9p141963jsn8ffdcf503ffd");
xhr.send(data);