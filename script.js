//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
        const browserInfoDiv = document.getElementById('browser-info');
        const browserName = navigator.appName;
        const version = navigator.appVersion;

        browserInfoDiv.innerText = "You are using " + browserName + " version " + version;
    });