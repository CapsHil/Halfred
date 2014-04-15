var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get_alarmes()
{
	var xhralarme = new XMLHttpRequest();
	xhralarme.open('GET', URL_SERV + "/PHP/action.controller.php?action=today_alarme");
	xhralarme.onreadystatechange = function()
	{
		if(xhralarme.readyState == 4 && xhralarme.status == 200)
		{
			console.log("------Get_alarmes BDD ------");
			alarmes = JSON.parse(xhralarme.responseText);
			check_alarm();
		}
		else if(xhralarme.readyState == 4 && xhralarme.status != 200)
		{

		}
	}
	xhralarme.send(null);
}	
