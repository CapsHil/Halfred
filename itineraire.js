var gm = require('googlemaps');

function temps_itineraire(start, end, callback)
{
	gm.directions(start, end ,
	function(err, data){
		var duration = data['routes'][0]['legs'][0]['duration']['value'];
		duration /= 60;
		duration = Math.round(duration);
		if(callback)
		{
			callback(duration);
		}
	});
}

temps_itineraire("82 avenue de la Paix, Issy les Moulineaux", "Saclay CEA", function(duration){console.log(duration + " minutes");});
