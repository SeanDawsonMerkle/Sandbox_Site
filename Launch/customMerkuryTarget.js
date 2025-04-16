_satellite.logger.debug("Running custom Merkury Target call");

var abcid = _svDataLayer.trackIdentityDataLayer.data.abcid;

if (!abcid) {
    _satellite.logger.debug("Merkury Target call skipped, no abcid found in data layer.");
    return false;
}
_satellite.logger.debug("Web SDK call with abcid: " + abcid);

alloy("sendEvent", {
    "renderDecisions": true,
    "decisionScopes": ["merkuryIdentity"],
    "data": {
        __adobe: {
            target: {
                merkury_abcid: abcid,
            }
        }
    },
    "xdm": {
        "eventType": "merkuryIdentity",
        "identityMap": {
            "ABCID": [
                {
                    "id": abcid,
                    "authenticatedState": "authenticated",
                    "primary": true
                }
            ]
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
