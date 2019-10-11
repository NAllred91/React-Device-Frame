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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
