Add device frames around a React app.

# Setup
1) `npm install https://github.com/NAllred91/React-Device-Frame.git --save`
2) Update `src/index.js` to use `react-device-frame`. Calling this function replaces `ReactDOM.render(<App />, 'root')`


`src/index.js` should look like this:
``` javascript
import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reactDeviceFrame from 'react-device-frame';

reactDeviceFrame(<App />, 'root')
```


# Optional Configurations
You can provide an options object as the third parameter to `reactDeviceFrame` for setting optional configurations.
```
reactDeviceFrame(<App />, 'root', {})
```

## Allow disabling device frame
Setting `allowDisable: true` will allow you to disable the device frame by including `disableDeviceFrame=true` in the query string.

## Enable/Disable device frame for URLs
`enabledURLs` or `disabledURLs` can be set to an array of URLs for which the device frame should be enabled/disabled.

`enabledURLs` and `disabledURLs` cannot both be provided.

`^` can be used as a wildcard within the path.
For example, `/test/^/path` will match `/test/some/path`.

`^^` can be used as a wildcard for the reaminder of the path.
For example, `/test/^^` will match all paths that start with `/test`.

```
{
    enabledURLs: ['/test', '/path/^/test', '/my/path/^^']
}
```
