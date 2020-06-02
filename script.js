$(function () {
    var formHandler = function (e) {
      e.preventDefault(); // Avoid form submit
      var fromuser = $(this).serializeArray();
      var inputName =  fromuser[0].value;
      //rapidApi(inputName);
    };
    $('form').submit(formHandler);

});

function rapidApi(inputName) {
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
    fromApi(data);
  });
}

function fromApi(data){ //fromApi(data)
/*
  player_Name = data.user.displayName;
  //timeline_mode
  s_Solo  = data.season.all.defaultsolo;
  l_Solo  = data.lifetime.all.defaultsolo;
  s_Duo   = data.season.all.defaultduo;
  l_Duo   = data.lifetime.all.defaultduo;
  s_Squad = data.season.all.defaultsquad;
  l_Squad = data.lifetime.all.defaultsquad;
  //season_solo_Statistics
  var s_solo_Outlived = s_Solo.playersoutlived;
  var s_solo_Winrate  = s_Solo.winrate;
  var s_solo_Matches  = s_Solo.matchesplayed;
  var s_solo_Score    = s_Solo.score;
  var s_solo_Kills    = s_Solo.kills;
  var s_solo_Top25    = s_Solo.placetop25;
  var s_solo_Top10    = s_Solo.placetop10;
  var s_solo_Top01    = s_Solo.placetop1;
  //lifetime_solo_Statistics
  var l_solo_Outlived = l_Solo.playersoutlived;
  var l_solo_Winrate  = l_Solo.winrate;
  var l_solo_Matches  = l_Solo.matchesplayed;
  var l_solo_Score    = l_Solo.score;
  var l_solo_Kills    = l_Solo.kills;
  var l_solo_Top25    = l_Solo.placetop25;
  var l_solo_Top10    = l_Solo.placetop10;
  var l_solo_Top01    = l_Solo.placetop1;
  //season_duo_Statistics
  var s_duo_Outlived = s_Duo.playersoutlived;
  var s_duo_Winrate  = s_Duo.winrate;
  var s_duo_Matches  = s_Duo.matchesplayed;
  var s_duo_Score    = s_Duo.score;
  var s_duo_Kills    = s_Duo.kills;
  var s_duo_Top25    = s_Duo.placetop12;
  var s_duo_Top10    = s_Duo.placetop5;
  var s_duo_Top01    = s_Duo.placetop1;
  //lifetime_duo_Statistics
  var l_duo_Outlived = l_Duo.playersoutlived;
  var l_duo_Winrate  = l_Duo.winrate;
  var l_duo_Matches  = l_Duo.matchesplayed;
  var l_duo_Score    = l_Duo.score;
  var l_duo_Kills    = l_Duo.kills;
  var l_duo_Top25    = l_Duo.placetop12;
  var l_duo_Top10    = l_Duo.placetop5;
  var l_duo_Top01    = l_Duo.placetop1;
  //season_squad_Statistics
  var s_squad_Outlived = s_Squad.playersoutlived;
  var s_squad_Winrate  = s_Squad.winrate;
  var s_squad_Matches  = s_Squad.matchesplayed;
  var s_squad_Score    = s_Squad.score;
  var s_squad_Kills    = s_Squad.kills;
  var s_squad_Top25    = s_Squad.placetop6;
  var s_squad_Top10    = s_Squad.placetop3;
  var s_squad_Top01    = s_Squad.placetop1;
  //lifetime_squad_Statistics
  var l_squad_Outlived = l_Squad.playersoutlived;
  var l_squad_Winrate  = l_Squad.winrate;
  var l_squad_Matches  = l_Squad.matchesplayed;
  var l_squad_Score    = l_Squad.score; //
  var l_squad_Kills    = l_Squad.kills;
  var l_squad_Top25    = l_Squad.placetop6; //
  var l_squad_Top10    = l_Squad.placetop3; //
  var l_squad_Top01    = l_Squad.placetop1; //
  */
  //test

  var t_Name = "Ninja";
  var s_t_Outlived = 1232;
  var s_t_Winrate  = 54.5;
  var s_t_Matches  = 5321;
  var s_t_Score    = 2151;
  var s_t_Kills    = 5213;
  var s_t_Top25    = 12;
  var s_t_Top10    = 54;
  var s_t_Top01    = 4;
  var l_t_Outlived = 214123;
  var l_t_Winrate  = 34.5;
  var l_t_Matches  = 5323121;
  var l_t_Score    = 2123151;
  var l_t_Kills    = 5252513;
  var l_t_Top25    = 212;
  var l_t_Top10    = 5244;
  var l_t_Top01    = 244;
  //console.log(player_Name);
  //console.log(data);
  return [
    t_Name, //0
    s_t_Outlived, //1
    s_t_Winrate,   //2
    s_t_Matches ,    //3
    s_t_Score,   //4
    s_t_Kills,    //5
    s_t_Top25,    //6
    s_t_Top10,     //7
    s_t_Top01,     //8
    l_t_Outlived ,  //9
    l_t_Winrate,    //10
    l_t_Matches,   //11
    l_t_Score,   //12
    l_t_Kills,    //13
    l_t_Top25,    //14
    l_t_Top10,      //15
    l_t_Top01 ];   //16
}
var fromApidata = fromApi();
