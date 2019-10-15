# Twitch Status

Get the stream status of any user. Twitch API calls are controlled with jQuery ajax functionality.

[**DEMO**](https://raw.githack.com/doppl3r/twitch-status/master/index.html) - See if shroud is online!

## Installation

  1. Include Javascript libraries (2) inside the `<body>`

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