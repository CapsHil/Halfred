var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function openweathermeteo()
{
    var  url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=48.817521&lon=2.273687&cnt=1&mode=json&units=metric&lang=fr';
 
    var xhrmeteo = new XMLHttpRequest();
                     xhrmeteo.open('GET', url );
                     xhrmeteo.onreadystatechange = function() 
                         {
                            if (xhrmeteo.readyState == 4 && xhrmeteo.status == 200) 
                            {
                                var donneesmeteo = JSON.parse(xhrmeteo.responseText);
                                var text = 'Ce matin la température est de '+Math.round(donneesmeteo.list[0].temp.day)+'degrés celcius';
                                console.log(text);

                            }
                            else if(xhrmeteo.readyState == 4 && xhrmeteo.status != 200) 
                            {
                               return "ERROR";
                            }

                        }
                        xhrmeteo.send(null);
}
openweathermeteo();
