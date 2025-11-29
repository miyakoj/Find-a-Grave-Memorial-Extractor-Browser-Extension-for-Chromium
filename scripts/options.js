document.getElementById('save-settings').addEventListener('click', () => {
  let options = {};
	  
  const wikitreeCheck = document.getElementById('wikitree-check').checked;
  options.useWikiTreeCheck = wikitreeCheck;

  const debugMode = document.getElementById('debugMode-check').checked;
  options.debugMode = debugMode;

  console.log('WikiTree check enabled: ' + options.useWikiTreeCheck);
  console.log('Debug mode enabled: ' + options.debugMode);

  chrome.storage.local.set({options});
});

window.onload = () => {
  // set the current settings values in the options page
  chrome.storage.local.get('options').then((result) => {
    const options = result.options || {};
    document.getElementById('wikitree-check').checked = options.useWikiTreeCheck || false;
    document.getElementById('debugMode-check').checked = options.debugMode || false;
  });
};