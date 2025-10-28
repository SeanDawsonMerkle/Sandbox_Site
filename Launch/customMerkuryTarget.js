_satellite.logger.debug("Running custom Merkury Target call");

var hmid = _svDataLayer.hmid;

_satellite.logger.debug("Web SDK call with hmid: " + hmid);

alloy("sendEvent", {
    "renderDecisions": true,
    "decisionScopes": ["merkuryIdentity"],
    "data": {
        __adobe: {
            target: {
                merkury_hmid: hmid,
            }
        }
    }
}).then(function (result) {
    window.merkuryIdentityResult = result;
    _satellite.logger.debug("merkuryIdentity RESULT", result);

    window.merkuryIdentityContent = [];
    if (result && result.propositions && result.propositions.length > 0) {
        for (var i = 0; i < result.propositions.length; i++) {
            var tContent = result.propositions[i]?.items[0]?.data?.content;
            merkuryIdentityContent.push(tContent);
            _satellite.logger.debug("merkuryIdentity Content", tContent);
            document.getElementById('targetContent').innerText = JSON.stringify(tContent, null, 2);
        }
    }
}).catch(function (err) {
    _satellite.logger.debug("merkuryIdentity ERROR", err);
    window.merkuryIdentityError = err;
    return false;
});

return true;
