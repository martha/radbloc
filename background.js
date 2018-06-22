// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log("The color is green.");
//   });

//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details);
    console.log("blocking:", details.url);
    if (enabled) {
      return {redirectUrl: "http://www.wikipedia.com" };
    }
  },
  {urls: blocked_domains},
  ["blocking"]
);
