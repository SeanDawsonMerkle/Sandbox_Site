window.adobeDataLayer = window.adobeDataLayer || [];
window.launchControl = window.launchControl || {};
(function (lc) {
    lc.codeVersion = "2024jan19v1";
    var tBuildTime = new Date(_satellite.buildInfo.buildDate);
    lc.buildInfo = {
        event: "launch_build_info",
        launchControl_codeVersion: lc.codeVersion,
        _satPropertyName: _satellite.property.name,
        _satEnvId: _satellite.environment.id,
        _satEnvName: _satellite.getVar("mt_launch_env_name_from_id"),
        _satEnvStage: _satellite.environment.stage,
        _satBuildDate: _satellite.buildInfo.buildDate,
        _satBuildDateLocalTZ: tBuildTime.toString()
    };
    adobeDataLayer.push(lc.buildInfo);
    _satellite.logger.debug(lc.buildInfo);
})(window.launchControl);
