$(document).ready(function(){
    // initialize user login and status variables
    var login = '';
    var twitchStatusLinks = $('.twitch-status');
    var user_name = getUrlParameter('user_name');

    // loop through each link
    twitchStatusLinks.each(function(index, value) {
        var twitchStatusLink = $(this);
        twitchStatusLink.html('<div class="icon"></div><div class="text">Offline</div>');
        login = twitchStatusLink.attr('href').split('/');
        login = login[3]; // get username from link
        
        // check for parameter override - useful for iframe links
        if (user_name !== undefined) {
            login = user_name;
            twitchStatusLink.attr('href', 'https://twitch.tv/' + login);
        }

        // use ajax to call Twitch API - Client ID: https://dev.twitch.tv/console/apps/create
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/helix/streams?user_login=' + login,
            headers: { 'Client-ID': 'cwsaw2mxwu6k70kk3nxa13g5spxesx' },
            success: function (data) {
                console.log(data);
                var status = "offline"; // default if data not null
                if (data.data[0] != undefined) status = data.data[0]['type'];
                twitchStatusLink.addClass(status);
                twitchStatusLink.find('.text').text(status);
            }
        });
    });
});

// get parameter from url - https://stackoverflow.com/a/21903119/2510368
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var sParameterName;
    for (var i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};