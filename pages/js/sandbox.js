performance.mark("sandboxControl:start");
window.sandboxControl = {};
(function (sb) {
    sb.codeVersion = "2026may8v1";
    sb.logPerformanceStartTimes = function() {
        performance.getEntries().forEach(entry => {
            console.log("Entry: ", entry.name, " - start time:", entry.startTime);
        });
    };
})(window.sandboxControl);
performance.mark("sandboxControl:end");
