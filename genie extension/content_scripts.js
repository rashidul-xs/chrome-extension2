

function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

const scriptList = [
    "/dist/jquery.js",
    "/dist/config.js",
    "/dist/essential-scripts.js",
    "/dist/admin/js/store-provider.js",
    "/loadBtn.js",
    "/dist/admin/js/antd.js",
    "/dist/admin/js/app-handler.js",
    "/dist/admin/js/common-scripts.js",
    "/dist/admin/js/templates-scripts.js",
    "/dist/admin/js/wp-integrations.js"
  ]
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/jquery.js"), 'body');

  }, 100);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/config.js"), 'body');

  }, 200);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/essential-scripts.js"), 'body');

  }, 300);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/store-provider.js"), 'body');

  }, 400);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/loadBtn.js"), 'body');

  }, 500);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/antd.js"), 'body');

  }, 600);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/app-handler.js"), 'body');

  }, 700);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/common-scripts.js"), 'body');

  }, 800);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/templates-scripts.js"), 'body');

  }, 900);
  setTimeout(() => {
    injectScript(chrome.runtime.getURL("/dist/admin/js/wp-integrations.js"), 'body');

  }, 1000);


  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    // localStorage.setItem("abc", JSON.stringify(obj))
    // response('message form background js');
    chrome.runtime.sendMessage({
      data:obj
    })
    window.addEventListener('LoadContent', function(evt) {
      content = "amar sonar bangla"
      var event = new CustomEvent('RecieveContent', {detail: content});
      window.dispatchEvent(event);
    });    

});

// chrome.runtime.sendMessage({ data: "content_ script" }, function (response) {
//     console.log(response);
// });

// window.addEventListener("message", function(event){
//   chrome.runtime.sendMessage(event.data);
//   // console.log(event);
// })

// Content script
