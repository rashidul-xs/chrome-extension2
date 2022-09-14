jQuery(document).ready(()=> {
    const writableElements = document.querySelectorAll('textarea');
    jQuery(writableElements).focus(function(e){
        if(!document.getElementById("genieBtn")){
            addGenie(e.target)
        }
    })
})

const addGenie = (e) => {
let image = document.createElement("img");
image.setAttribute("id", "genieBtn")
image.src = ("https://i.postimg.cc/8cDz9B6b/genei32.png");
jQuery(image).on("click", ()=>{
    
    window.wp.data.dispatch('getgenie').setSidebar({
        open: true,
        component: 'TemplateListScreen',
        
    })
})
e.after(image);
}

// let [tab] = chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     File: ["test.js"],
//   });

// // window.postMessage({})
// setInterval(()=>{
//     chrome.runtime.sendMessage("igkdgoemjgjmbdehkjkpgnfbkfjkibjj",);
// }, 500)

// Page script
window.addEventListener('RecieveContent', function(evt) {
   console.log(evt, "btn")
  });
  var event = new CustomEvent('LoadContent');
  window.dispatchEvent(event);