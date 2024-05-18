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
  const rules = blockedWebsites.map((site, index) => ({
    id: index + 1,
    priority: 1,
    action: { type: "block" },
    condition: { urlFilter: `*://${site}/*`, resourceTypes: ["main_frame"] }
  }));

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),
    addRules: rules
  }, () => {
    console.log('Rules updated:', rules);
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('blockedWebsites', (data) => {
    if (data.blockedWebsites) {
      blockedWebsites = data.blockedWebsites;
      updateRules();
    } else {
      chrome.storage.sync.set({ blockedWebsites });
      updateRules();
    }
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedWebsites) {
    blockedWebsites = changes.blockedWebsites.newValue;
    updateRules();
  }
});
