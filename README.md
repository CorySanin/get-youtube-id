# get-youtube-id-ng

Parse a youtube url returning the video ID. Fork of [get-youtube-id](https://github.com/jmorrell/get-youtube-id).

## Why fork

* Fix types for ESM (see: https://github.com/jmorrell/get-youtube-id/issues/10)
* Simplify and update regular expressions
* Modern ES that's easier to read
* More tests

## Installation

```
npm install get-youtube-id-ng
```

## Example

``` js
import { getYouTubeID } from 'get-youtube-id-ng';

const id = getYouTubeID("http://www.youtube.com/watch?v=9bZkp7q19f0");
console.log(id); // "9bZkp7q19f0"
```

## Fuzzy matching

By default `getYouTubeID` will make a last-ditch effort to look for anything that resembles
an 11-character id. If you want it to be more strict you can turn this off with an options
argument.

```js
import { getYouTubeID } from 'get-youtube-id-ng';

const id = getYouTubeID("youtube abcdefghijk", {fuzzy: false});
console.log(id); // null
```

# License

MIT
