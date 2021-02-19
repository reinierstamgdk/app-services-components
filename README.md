<h1>useDomLocation</h1>
<p align="center">
  <a href="">
    <img alt="License: MIT" src="https://img.shields.io/badge/Status-Beta-blue?style=for-the-badge" target="_blank" />
  </a>
  <a href="https://github.com/ahwelgemoed/useDomLocation">
    <img alt="License: MIT" src="https://img.shields.io/github/issues/ahwelgemoed/useDomLocation?style=for-the-badge" target="_blank" />
  </a>
  <a href="https://www.npmjs.com/package/usedomlocation">
    <img alt="GitHub issues" src="https://img.shields.io/github/release/ahwelgemoed/useDomLocation?style=for-the-badge&logo=github" target="_blank" />
  </a>
  <a href="https://github.com/ahwelgemoed/useDomLocation">
    <img alt="NPM" src="https://img.shields.io/github/release/ahwelgemoed/useDomLocation?style=for-the-badge&logo=npm" target="_blank" />
  </a>
  <a href="/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-Apache%202.0-orange.svg?style=for-the-badge" target="_blank" />
  </a>
  <br/>
</p>

A helper hook to build for monitoring pages changes in Mendix Widgets.

<h2>Brief Explanation</h2>

The issue is that Mendix is a SPA and `window.onpopstate` is inconsistent and only seems to fire if back and forward button in the browser is clicked.

**What `useDomLocation` does:** It monitors changes in the Dom using the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver), and when changes are detected it will check `window.history` or `window.mx.ui.getContentForm()` for changes. if there are changes it will fire the Callback function you passed in, thus giving you a reliable way to monitor page changes.

As MutationObserver will fire alot then page location is changed and even fire when stuff like info boxes are opened, `useDomLocation` throttels the MutationObserver.
Normal back and forward button presses are handled by `window.onpopstate`.

`useDomLocation` will not fire on Page Load.

<h2>Usage</h2>

```js
const { lastUpdateTime, createObserver, turnOffObserver } = useDomLocation({
  locationCallBack,
  throttleDuration: 500,
  useMendixNav: true,
});
```

<h3>Props Passed In</h3>

|                    | Type    | Info                                                                                           |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------- |
| `locationCallBack` | func    | The callback that will fire when Location is detected                                          |
| `throttleDuration` | number  | For how long the MutantObserver must be throttled                                              |
| `useMendixNav`     | boolean | Indicate if you are using it in a mendix Widget, `true` for Mendix `false` for non Mendix apps |

<h3>Props Passed back</h3>

|                   | Type    | Info                                           |
| ----------------- | ------- | ---------------------------------------------- |
| `lastUpdateTime`  | Date    | Passes back the last time the dom was updated. |
| `createObserver`  | number  | Manually Create observer                       |
| `turnOffObserver` | boolean | Manually turn off observer                     |

<h2>Issues</h2>

Please open an GH [issue](https://github.com/ahwelgemoed/useDomLocation/issues/new).
