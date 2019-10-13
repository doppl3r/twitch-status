# Twitch Status

Get the stream status of any user. Twitch API calls are controlled with jQuery ajax functionality.

[**DEMO**](https://raw.githack.com/doppl3r/twitch-status/master/index.html)

## How to Create Client ID

  - Go to https://dev.twitch.tv/console/apps/create
  - Set up Name, OAuth Redirect URL (http://localhost), and Category

## Example

Simply change out the `href` to the twitch channel, and the status will appear on your website:

```
<a class="twitch-status" href="https://www.twitch.tv/kargoh" target="_blank">
    <div class="icon"></div>
    <div class="text"></div>
</a>
```