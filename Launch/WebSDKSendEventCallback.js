// Modify content.xdm or content.data as necessary. There is no need to wrap the
// code in a function or return a value. For example:
// content.xdm.web.webPageDetails.name = "Checkout";
// https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/commands/configure/onbeforeeventsend

_satellite.logger.debug("WebSDK onBeforeEventSend callback content:", content);

if (!content?.xdm?._dentsuglobalpartnersbx?.objAmcaWebIdentities?.amcaMerkuryHMID) {
    _satellite.logger.debug("WebSDK onBeforeEventSend callback: remove hmid since not present");
    delete content.xdm._dentsuglobalpartnersbx?.objAmcaWebIdentities?.amcaMerkuryHMID;
}

if (localStorage.getItem("targetActive") === "true") {
    _satellite.logger.debug("WebSDK onBeforeEventSend callback: set quoteType from localStorage: ", localStorage.getItem("quoteType"));
    content.data = content.data || {};
    content.data.__adobe = content.data.__adobe || {};
    content.data.__adobe.target = content.data.__adobe.target || {};
    content.data.__adobe.target.quoteType = localStorage.getItem("quoteType");
}
