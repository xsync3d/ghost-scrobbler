(()=>{function o(o){console.log(`Message from the background script: ${o.response}`)}function e(o){console.log(`Error: ${o}`)}window.addEventListener("load",(function(n){browser.runtime.sendMessage({data:"Msg from browser action"}).then(o,e)}))})();