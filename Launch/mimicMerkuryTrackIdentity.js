_satellite.logger.debug("MimicMerkuryTrackIdentity START");

window._svDataLayer = {
    trackIdentityDataLayer : {
        data : {
            abcid : document.getElementById("abcidInput").value
        }
    }
}

const someCustomEvent = new Event("_svtrackidentity_response");
document.dispatchEvent(someCustomEvent);

_satellite.logger.debug("MimicMerkuryTrackIdentity END");

return true;
