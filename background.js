let blockedWebsites = [
  "pornhub.com",
  "xvideos.com",
  "xhamster.com",
  "xnxx.com",
  "eporner.com",
  "hqporner.com",
  "beeg.com",
  "sxyprn.com",
  "spankbang.com",
  "porntex.com",
  "fapello.com",
  "erothots.co",
  "thothub.to",
  "nudostar.com/home4/",
  "onlyfans,com"
];

function updateRules() {
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      if (blockedWebsites.includes(url.hostname)) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('blockedWebsites', (data) => {
    if (data.blockedWebsites) {
      blockedWebsites = data.blockedWebsites;
    } else {
      chrome.storage.sync.set({ blockedWebsites });
    }
    updateRules();
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedWebsites) {
    blockedWebsites = changes.blockedWebsites.newValue;
    updateRules();
  }
});