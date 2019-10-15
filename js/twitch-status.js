$(document).ready(function(){
    // initialize user login and status variables
    var login = '';
    var twitchStatus = $('.twitch-status');
    login = twitchStatus.attr('href').split('/');
    login = login[3]; // get username from link

    // Use ajax to call Twitch API - Client ID: https://dev.twitch.tv/console/apps/create
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/streams?user_login=' + login,
        headers: { 'Client-ID': 'cwsaw2mxwu6k70kk3nxa13g5spxesx' },
        success: function (data) {
            console.log(data);
            var status = "offline"; // default if data not null
            if (data.data[0] != undefined) status = data.data[0]['type'];
            twitchStatus.addClass(status);
            twitchStatus.find('.text').text(status);
        }
    });
});