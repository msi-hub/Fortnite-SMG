$(function () {
    var formHandler = function (e) {
      e.preventDefault(); // Avoid form submit
      var fromuser = $(this).serializeArray();
      var inputName =  fromuser[0].value;
      console.log(inputName); //need to send this value to forniteApi [HELP]
    };
    $('form').submit(formHandler);
});
/*
var fortniteApi = {
  "async": true,
  "crossDomain": true,
  "url": 'https://fortnite-api.p.rapidapi.com/stats/'+inputName,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
    "x-rapidapi-key": "9022f20635msh069f3a96f55ebeep14a836jsn7571baeacb94"
  }
}
$.ajax(fortniteApi).done(function (data) {
  console.log(data);
  console.log("Player Name:"+ data.user.displayName); //need to send this value to displayName [HELP]
});
*/
//var displayName = data.user.displayName;
