# Twitch Status

Get the stream status of any user. Twitch API calls are controlled with jQuery ajax functionality.

[**DEMO**](https://raw.githack.com/doppl3r/twitch-status/master/index.html) - See if shroud is online!

## How to Install to My Website

  1. Include Javascript libraries inside the `<body>`

```
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/twitch-status.js"></script>
```

  2. Add link(s) with the streamer's user name. Must include `twitch-status` class

```
<a class="twitch-status" href="https://www.twitch.tv/shroud" target="_blank"></a>
```

  3. Your link(s) should correctly show "Offline" or "Online" if installed properly

## How to Create Client ID

  - Go to https://dev.twitch.tv/console/apps/create
  - Set up Name, OAuth Redirect URL (http://localhost), and Category

## How to Install with `<iframe>`

  1. Download project into your website directory (ex: www.mywebsite.com/twitch-status/)
  2. Create `<iframe>` with the `src` attribute pointed to your directory, and add the `user_name` parameter to the URL

```
<iframe src="http://mywebsite.com/twitch-status/index.html?user_name=kargoh" width="72px" height="32px" frameBorder="0">
```