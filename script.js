var fortniteApi = {
	"async": true,
	"crossDomain": true,
	"url": "https://fortnite-api.p.rapidapi.com/stats/Sniper%2520OCE",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fortnite-api.p.rapidapi.com",
		"x-rapidapi-key": "9022f20635msh069f3a96f55ebeep14a836jsn7571baeacb94"
	}
}

$.ajax(fortniteApi).done(function (data) {
  console.log(data);
	console.log(data.user.displayName + " " + data.season.keyboardmouse.all.winrate);
});
