$(document).ready(function() {
  //Recent Follower (Twitch API Required)
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/channels/NAJ263/follows/",
    headers: {
      'Client-ID': 'ql93k2lg41xsnebz7kgyfjsrg28j532'
    },
    success: function(data1) {
      for (var i = 0; i < data1.follows.length; i++) {
        var displayName = data1.follows[0].user.display_name;
        $("#follow").prepend("<div id='follow' class='section'>" + "<div class='tag'>Recent Follower</div>" + "<div class='followerName'>" + displayName + "</div>" + "<div class='tag-highlight'></div></div>");
      }
    }
  });

  // Recent Subscriber (GameWisp API Required)
  // var params = {
  //   access_token: "CHANNEL_ACCESS_TOKEN",
  //   limit: 1,
  //   order: 'desc',
  //   status: 'active',
  //   include: 'user'
  // };
  // $.getJSON('https://api.gamewisp.com/pub/v1/channel/subscribers/', params, function(data2) {});
    var subName = "TestUserName";
    $("#sub").prepend("<div id='sub' class='section'>" + "<div class='tag'>Recent Sub</div>" + "<div class='subName'>" + subName + "</div>" + "<div class='tag-highlight'></div></div>");
  // Recent Subscriber (Twitch API and Partnership Required)
  // $.ajax({
  //   type: "GET",
  //   url: "https://api.twitch.tv/kraken/channels/videogameroulette/subscriptions/",
  //   headers: {
  //     'Client-ID': 'ql93k2lg41xsnebz7kgyfjsrg28j532'
  //   },
  //   success: function(data2) {
  //     console.log(data2);
  // for (var i = 0; i < data2.subscriptions.length; i++) {
  // var subName = data2.subscriptions[i].user.display_name;
  // $("#sub").prepend("<div id='sub' class='section'>" + "<div class='tag'>Recent Sub</div>" + "<div class='subName'>" + subName + "</div>" + "<div class='tag-highlight'></div></div>");
  //   }
  // });

  //RECENT TIP (TwitchAlerts API Required)
  var tipName = "TestUserName: $0.00";
  $("#tip").prepend("<div id='tip' class='section'>" + "<div class='tag'>Recent Tip</div>" + "<div class='tipName'>" + tipName + "</div>" + "<div class='tag-highlight'></div></div>");

  //Current Game (Twitch API Required)
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/channels/NAJ263/",
    headers: {
      'Client-ID': 'ql93k2lg41xsnebz7kgyfjsrg28j532'
    },
    success: function(data4) {
      //console.log(data4);
      var gameName = data4.game;
      //console.log(gamename)
      $("#game").prepend("<div id='game' class='section'>" + "<div class='tag'>Current Game</div>" + "<div class='gameName'>" + gameName + "</div>" + "<div class='tag-highlight'></div></div>");
    }
  });
});
