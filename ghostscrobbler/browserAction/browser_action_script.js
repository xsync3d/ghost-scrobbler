var __webpack_exports__={};function handleResponse(e){console.log(`Message from the background script: ${e.response.auth}`),document.getElementById("thumbnail-element").src=e.response.song.thumbnail_url,document.getElementById("song-title").textContent=e.response.song.title,document.getElementById("song-author").textContent=e.response.song.author,e.response.auth&&(document.getElementById("auth").textContent="Last.fm is Authenticated")}function handleError(e){console.log(`${e}`)}function notifyBackgroundPage(e){browser.runtime.sendMessage({page:"browser-action",data:"Msg from browser action"}).then(handleResponse,handleError)}window.addEventListener("load",notifyBackgroundPage);