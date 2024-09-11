performance.mark("sandboxControl:start");
window.sandboxControl = {};
(function (sb) {
    sb.codeVersion = "2024jan19v1";

    window.sb = sb; //for ease of testing
    window.adobeDataLayer = window.adobeDataLayer || [];

    sb.logPerformanceStartTimes = function() {
        performance.getEntries().forEach(entry => {
            console.log("Entry: ", entry.name, " - start time:", entry.startTime);
        });
    };
})(window.sandboxControl);
performance.mark("sandboxControl:end");
