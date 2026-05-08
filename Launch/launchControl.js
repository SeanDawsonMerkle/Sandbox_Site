window.launchControl = window.launchControl || {};
(function (lc) {
    lc.codeVersion = "2026jan26v2";
    window.lc = lc; //for ease of testing
    var tBuildTime = new Date(_satellite.buildInfo.buildDate);
    lc.buildInfo = {
        event: "launch_build_info",
        launchControl_codeVersion: lc.codeVersion,
        _satPropertyName: _satellite.property.name,
        _satEnvId: _satellite.environment.id,
        _satEnvStage: _satellite.environment.stage,
        _satBuildDate: _satellite.buildInfo.buildDate,
        _satBuildDateLocalTZ: tBuildTime.toString()
    };
    adobeDataLayer.push(lc.buildInfo);
    _satellite.logger.debug(lc.buildInfo);

    //Mimic Merkury
    lc.storeMerkuryData = function () {
        localStorage.setItem("demo_svDataLayer", JSON.stringify(window._svDataLayer));
    };

    let lsSVDL = localStorage.getItem("demo_svDataLayer");
    if (lsSVDL) {
        try {
            window._svDataLayer = JSON.parse(lsSVDL);
        }
        catch (e) {
            _satellite.logger.debug("Clearing invalid demo_svDataLayer from localStorage");
            localStorage.removeItem("demo_svDataLayer");
            window._svDataLayer = {};
        }
    } else {
        //_dentsuglobalpartnersbx.objAmcaMerkuryTags
        window._svDataLayer = {
            "confidence_score": "1",  //amcaMkConfidenceScore
            "hmid": "123abc456def",
            "mrklifev00261": "X6",  //generation
            "mrkdemov00253": "54",  //age
            "mrkdemov00003": "M",   //gender
            "mrkgeov00008": "WA",   //location
            "mrkdemov00006": "M",   //marital status
            "mrkdemob00007": "2",   //children in household
            "mrkdemov00009": "C",   //children in household
            "mrkfinv00136": "J",    //HH income
            "mrkdemov00005": "B",   //education level
            "mrkdemov00244": "T4",  //ethnicity
            "mrkrealv00024": "S",   //dwelling type
            "mrkautov00065": "MINI"    //vehicle make
        };

        lc.storeMerkuryData();
    }

    lc.calcPerformance = function () {
        lc.scriptSrc = document.querySelector("script[src*='assets.adobedtm']").src;
        lc.launchPerfEntry = performance.getEntriesByName(lc.scriptSrc)[0];

        _satellite.logger.debug("Launch Performance: start:", lc.launchPerfEntry.startTime, " - duration", lc.launchPerfEntry.duration);
    };

    alloy("getIdentity")
    .then(function (result) {
        _satellite.logger.debug("ECID from WebSDK = " + result.identity.ECID);
    })
    .catch(function (error) {
        _satellite.logger.debug("ECID processing getIdentity error: ", error);
    });
})(window.launchControl);
