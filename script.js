$(function () {
    var formHandler = function (e) {
      e.preventDefault(); // Avoid form submit
      var fromuser = $(this).serializeArray();
      var inputName =  fromuser[0].value;
      rapidApi(inputName);
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

  if (data==null)
  {
    console.log("Hello World");
  }
  else {
    document.getElementById('err').style.visibility = "visible";

    if(data.user.displayName != null){
      window.open("gensmap.html","_self");

      document.getElementById('err').style.visibility = "hidden";

      var player_Name = data.user.displayName;
      console.log(data);
      console.log(player_Name);
      //timeline_mode_checknull
      if (data.season.all.defaultsolo !=null){
        var s_solo = data.season.all.defaultsolo;
      } else {
        var s_solo = 0;
      }
      if (data.lifetime.all.defaultsolo !=null){
        var l_solo = data.lifetime.all.defaultsolo;
      } else {
        var l_solo = 0;
      }
      if (data.season.all.defaultduo !=null){
        var s_duo = data.season.all.defaultduo;
      } else {
        var s_duo = 0;
      }
      if (data.lifetime.all.defaultduo !=null){
        var l_duo = data.lifetime.all.defaultduo;
      } else {
        var l_duo = 0;
      }
      if (data.season.all.defaultsquad !=null){
        var s_squad = data.season.all.defaultsquad;
      } else {
        var s_squad = 0;
      }
      if (data.lifetime.all.defaultsquad !=null){
        var l_squad = data.lifetime.all.defaultsquad;
      } else {
        var l_squad = 0;
      }
      //season_solo_Statistics
      if (s_solo == 0){
        var s_solo_Outlived = 0;
        var s_solo_Winrate  = 0;
        var s_solo_Matches  = 0;
        var s_solo_Kills    = 0;
        var s_solo_Top25    = 0;
        var s_solo_Top10    = 0;
        var s_solo_Top01    = 0;
      } else {
        var s_solo_Outlived = s_solo.playersoutlived;
        var s_solo_Winrate  = s_solo.winrate;
        var s_solo_Matches  = s_solo.matchesplayed;
        var s_solo_Kills    = s_solo.kills;
        var s_solo_Top25    = s_solo.placetop25;
        var s_solo_Top10    = s_solo.placetop10;
        var s_solo_Top01    = s_solo.placetop1;
      }
      //lifetime_solo_Statistics
      if (l_solo == 0){
        var l_solo_Outlived = 0;
        var l_solo_Winrate  = 0;
        var l_solo_Matches  = 0;
        var l_solo_Kills    = 0;
        var l_solo_Top25    = 0;
        var l_solo_Top10    = 0;
        var l_solo_Top01    = 0;
      } else {
        var l_solo_Outlived = l_solo.playersoutlived;
        var l_solo_Winrate  = l_solo.winrate;
        var l_solo_Matches  = l_solo.matchesplayed;
        var l_solo_Kills    = l_solo.kills;
        var l_solo_Top25    = l_solo.placetop25;
        var l_solo_Top10    = l_solo.placetop10;
        var l_solo_Top01    = l_solo.placetop1;
      }

      //season_duo_Statistics
      if (s_duo == 0){
        var s_duo_Outlived = 0;
        var s_duo_Winrate  = 0;
        var s_duo_Matches  = 0;
        var s_duo_Kills    = 0;
        var s_duo_Top12    = 0;
        var s_duo_Top05    = 0;
        var s_duo_Top01    = 0;
      } else {
        var s_duo_Outlived = s_duo.playersoutlived;
        var s_duo_Winrate  = s_duo.winrate;
        var s_duo_Matches  = s_duo.matchesplayed;
        var s_duo_Kills    = s_duo.kills;
        var s_duo_Top12    = s_duo.placetop12;
        var s_duo_Top05    = s_duo.placetop5;
        var s_duo_Top01    = s_duo.placetop1;
      }
      //lifetime_duo_Statistics
      if (l_duo == 0){
        var l_duo_Outlived = 0;
        var l_duo_Winrate  = 0;
        var l_duo_Matches  = 0;
        var l_duo_Kills    = 0;
        var l_duo_Top12    = 0;
        var l_duo_Top05    = 0;
        var l_duo_Top01    = 0;
      } else {
        var l_duo_Outlived = l_duo.playersoutlived;
        var l_duo_Winrate  = l_duo.winrate;
        var l_duo_Matches  = l_duo.matchesplayed;
        var l_duo_Kills    = l_duo.kills;
        var l_duo_Top12    = l_duo.placetop12;
        var l_duo_Top05    = l_duo.placetop5;
        var l_duo_Top01    = l_duo.placetop1;
      }
      //season_squad_Statistics
      if (s_squad == 0){
        var s_squad_Outlived = 0;
        var s_squad_Winrate  = 0;
        var s_squad_Matches  = 0;
        var s_squad_Kills    = 0;
        var s_squad_Top06    = 0;
        var s_squad_Top03    = 0;
        var s_squad_Top01    = 0;
      } else {
        var s_squad_Outlived = s_squad.playersoutlived;
        var s_squad_Winrate  = s_squad.winrate;
        var s_squad_Matches  = s_squad.matchesplayed;
        var s_squad_Kills    = s_squad.kills;
        var s_squad_Top06    = s_squad.placetop6;
        var s_squad_Top03    = s_squad.placetop3;
        var s_squad_Top01    = s_squad.placetop1;
      }
      //lifetime_squad_Statistics
      if (l_squad == 0){
        var l_squad_Outlived = 0;
        var l_squad_Winrate  = 0;
        var l_squad_Matches  = 0;
        var l_squad_Kills    = 0;
        var l_squad_Top06    = 0;
        var l_squad_Top03    = 0;
        var l_squad_Top01    = 0;
      } else {
        var l_squad_Outlived = l_squad.playersoutlived;
        var l_squad_Winrate  = l_squad.winrate;
        var l_squad_Matches  = l_squad.matchesplayed;
        var l_squad_Kills    = l_squad.kills;
        var l_squad_Top06    = l_squad.placetop6;
        var l_squad_Top03    = l_squad.placetop3;
        var l_squad_Top01    = l_squad.placetop1;
      }
    }
    localStorage.setItem("faccount",player_Name);

    localStorage.setItem("ss_Outlived",s_solo_Outlived);
    localStorage.setItem("ss_Winrate",s_solo_Winrate);
    localStorage.setItem("ss_Matches",s_solo_Outlived);
    localStorage.setItem("ss_Kills",s_solo_Kills);
    localStorage.setItem("ss_Top25",s_solo_Top25);
    localStorage.setItem("ss_Top10",s_solo_Top10);
    localStorage.setItem("ss_Top01",s_solo_Top01);

    localStorage.setItem("ls_Outlived",l_solo_Outlived);
    localStorage.setItem("ls_Winrate",l_solo_Winrate);
    localStorage.setItem("ls_Matches",l_solo_Outlived);
    localStorage.setItem("ls_Kills",l_solo_Kills);
    localStorage.setItem("ls_Top25",l_solo_Top25);
    localStorage.setItem("ls_Top10",l_solo_Top10);
    localStorage.setItem("ls_Top01",l_solo_Top01);

    localStorage.setItem("sd_Outlived",s_duo_Outlived);
    localStorage.setItem("sd_Winrate",s_duo_Winrate);
    localStorage.setItem("sd_Matches",s_duo_Outlived);
    localStorage.setItem("sd_Kills",s_duo_Kills);
    localStorage.setItem("sd_Top12",s_duo_Top12);
    localStorage.setItem("sd_Top05",s_duo_Top05);
    localStorage.setItem("sd_Top01",s_duo_Top01);

    localStorage.setItem("ld_Outlived",l_duo_Outlived);
    localStorage.setItem("ld_Winrate",l_duo_Winrate);
    localStorage.setItem("ld_Matches",l_duo_Outlived);
    localStorage.setItem("ld_Kills",l_duo_Kills);
    localStorage.setItem("ld_Top12",l_duo_Top12);
    localStorage.setItem("ld_Top05",l_duo_Top05);
    localStorage.setItem("ld_Top01",l_duo_Top01);

    localStorage.setItem("sq_Outlived",s_squad_Outlived);
    localStorage.setItem("sq_Winrate",s_squad_Winrate);
    localStorage.setItem("sq_Matches",s_squad_Outlived);
    localStorage.setItem("sq_Kills",s_squad_Kills);
    localStorage.setItem("sq_Top06",s_squad_Top06);
    localStorage.setItem("sq_Top03",s_squad_Top03);
    localStorage.setItem("sq_Top01",s_squad_Top01);

    localStorage.setItem("lq_Outlived",l_squad_Outlived);
    localStorage.setItem("lq_Winrate",l_squad_Winrate);
    localStorage.setItem("lq_Matches",l_squad_Outlived);
    localStorage.setItem("lq_Kills",l_squad_Kills);
    localStorage.setItem("lq_Top06",l_squad_Top06);
    localStorage.setItem("lq_Top03",l_squad_Top03);
    localStorage.setItem("lq_Top01",l_squad_Top01);
  }
}
