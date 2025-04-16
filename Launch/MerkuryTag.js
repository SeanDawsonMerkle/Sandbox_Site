var startTime = new Date();
console.log("Start Time:", startTime.toISOString());

window._svq = window._svq || [];
//window._svq.push(['_trackPageView']);
window._svq.push(['_trackIdentity', (result) => {
    var endTime = new Date();
    console.log("_trackIdentity returned:", endTime - startTime);
    console.log("End Time:", endTime.toISOString());
    launchControl.merkuryTrackIdentityResult = result;
    var identity = result?.d?.trackIdentity?.data;
    // DO STUFF WITH 'identity' data
    window._svDataLayer = identity;
    //NOTE: tag fires '_svtrackidentity_response' after this callback
}]);

console.log("_svq init:", Date.now() - startTime);

window.merkuryTagLoaded = function () {
    console.log("tag loaded:", Date.now() - startTime);
};

window.loadMerkuryTag = function () {
    (function (d, c) {
        var sv = d.createElement(c);
        sv.type = 'text/javascript';
        sv.src = '//track.sv.rkdms.com/js/sv.js?sv_cid=4974_04517&sv_origin=seandawsonmerkle.github.io';
        sv.onload = window.merkuryTagLoaded;
        var s = d.getElementsByTagName(c)[0];
        s.parentNode.insertBefore(sv, s);
    })(document, 'script');
    console.log("tag added:", Date.now() - startTime);
};

console.log("start 1 second delay:", Date.now() - startTime);
setTimeout(() => {
    console.log("end 1 second delay:", Date.now() - startTime);
    window.loadMerkuryTag();
}, (1000));
