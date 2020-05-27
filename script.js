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
  s_solo_Outlived = s_Solo.playersoutlived;
  s_solo_Winrate  = s_Solo.winrate;
  s_solo_Matches  = s_Solo.matchesplayed;
  s_solo_Score    = s_Solo.score;
  s_solo_Kills    = s_Solo.kills;
  s_solo_Top25    = s_Solo.placetop25;
  s_solo_Top10    = s_Solo.placetop10;
  s_solo_Top01    = s_Solo.placetop1;
  //lifetime_solo_Statistics
  l_solo_Outlived = l_Solo.playersoutlived;
  l_solo_Winrate  = l_Solo.winrate;
  l_solo_Matches  = l_Solo.matchesplayed;
  l_solo_Score    = l_Solo.score;
  l_solo_Kills    = l_Solo.kills;
  l_solo_Top25    = l_Solo.placetop25;
  l_solo_Top10    = l_Solo.placetop10;
  l_solo_Top01    = l_Solo.placetop1;
  //season_duo_Statistics
  s_duo_Outlived = s_Duo.playersoutlived;
  s_duo_Winrate  = s_Duo.winrate;
  s_duo_Matches  = s_Duo.matchesplayed;
  s_duo_Score    = s_Duo.score;
  s_duo_Kills    = s_Duo.kills;
  s_duo_Top25    = s_Duo.placetop12;
  s_duo_Top10    = s_Duo.placetop5;
  s_duo_Top01    = s_Duo.placetop1;
  //lifetime_duo_Statistics
  l_duo_Outlived = l_Duo.playersoutlived;
  l_duo_Winrate  = l_Duo.winrate;
  l_duo_Matches  = l_Duo.matchesplayed;
  l_duo_Score    = l_Duo.score;
  l_duo_Kills    = l_Duo.kills;
  l_duo_Top25    = l_Duo.placetop12;
  l_duo_Top10    = l_Duo.placetop5;
  l_duo_Top01    = l_Duo.placetop1;
  //season_squad_Statistics
  s_squad_Outlived = s_Squad.playersoutlived;
  s_squad_Winrate  = s_Squad.winrate;
  s_squad_Matches  = s_Squad.matchesplayed;
  s_squad_Score    = s_Squad.score;
  s_squad_Kills    = s_Squad.kills;
  s_squad_Top25    = s_Squad.placetop6;
  s_squad_Top10    = s_Squad.placetop3;
  s_squad_Top01    = s_Squad.placetop1;
  //lifetime_squad_Statistics
  l_squad_Outlived = l_Squad.playersoutlived;
  l_squad_Winrate  = l_Squad.winrate;
  l_squad_Matches  = l_Squad.matchesplayed;
  l_squad_Score    = l_Squad.score;
  l_squad_Kills    = l_Squad.kills;
  l_squad_Top25    = l_Squad.placetop6;
  l_squad_Top10    = l_Squad.placetop3;
  l_squad_Top01    = l_Squad.placetop1;
  */
  //test

  var t_Name = "Ninja"; //0
  var s_t_Outlived = 624;  //1
  var l_t_Outlived = 214124;  //2
  var t_Winrate  = 54.5;    //3
  var t_Matches  = 5321;    //4
  var t_Score    = 2151;    //5
  var t_Kills    = 5213;    //6
  var t_Top25    = 12;      //7
  var t_Top10    = 54;      //8
  var t_Top01    = 54;      //9

  //console.log(player_Name);
  //console.log(data);
  return [t_Name,s_t_Outlived,l_t_Outlived,t_Winrate,t_Matches,t_Score,t_Kills,t_Top25,t_Top10,t_Top01];
}
var fromApidata = fromApi();
