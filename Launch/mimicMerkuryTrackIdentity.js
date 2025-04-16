_satellite.logger.debug("MimicMerkuryTrackIdentity START");

window._svDataLayer = {
    trackIdentityDataLayer : {
        data : {
            abcid : "profilelookup20250411b",
        }
    }
}

const someCustomEvent = new Event("_svtrackidentity_response");
document.dispatchEvent(someCustomEvent);

_satellite.logger.debug("MimicMerkuryTrackIdentity END");

return true;
