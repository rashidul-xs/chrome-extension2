// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
//   }



// chrome.tabs.onActivated.addListener(moveToFirstPosition);

// function moveToFirstPosition(){
//  getCurrentTab().then(res => {
//     chrome.tabs.sendMessage(res.id, {content: "message"}, function(response) {
//         if(response) {
//             //We do something
//             console.log(response);
//         }
//     });
//  })


    
//     //  In Background.js


// }
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes("http")) {
        chrome.tabs.sendMessage(tabId, {
            url: tab.url,
            type: 'URL_CHANGE'
        }, function (res) {
            // console.log(res)
        });
    }
});

// chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
//     console.log("Got message from content Script: ", request);
//     sendResponse('message form background js');
// })

    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: .1,
            periodInMinutes: .1
        }
    );

    chrome.alarms.onAlarm.addListener(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                // console.log(json);
            })
        }
      )

      chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log('received', obj)
       })