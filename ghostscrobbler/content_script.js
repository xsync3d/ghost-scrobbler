"use strict";var __webpack_exports__={};function handleMessage(e,n,t){t(e)}browser.runtime.onMessage.addListener(handleMessage);var scrobbled,ytplayer=document.getElementsByTagName("video")[0];function videoIsPlaying(){return!ytplayer.paused&&!ytplayer.ended}function getTimestamp(){return ytplayer.currentTime}function getDuration(){return ytplayer.duration}function handleResponse(e){console.log(`Message from the background script: ${e.response}`),scrobbled=e.response.scrobbled}function handleError(e){console.log(e)}function notifyBackgroundPage(e){if(!scrobbled){var n=getTimestamp(),t=getDuration();browser.runtime.sendMessage({page:"content-script",timestamp:n,duration:t}).then(handleResponse,handleError)}}console.log(getTimestamp());const intervalId=setInterval((()=>{videoIsPlaying()&&notifyBackgroundPage(null)}));