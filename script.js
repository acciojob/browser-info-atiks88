//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
        const browserInfoDiv = document.getElementById('browser-info');
	    const useragent =navigator.userAgent;
        const browserName = navigator.appName;
        const version = navigator.appVersion;

        browserInfoDiv.innerText = "You are using "+useragent + browserName + " version " + version;
    });