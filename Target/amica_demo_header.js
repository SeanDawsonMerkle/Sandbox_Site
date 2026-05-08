//<script>
_satellite.logger.debug("Target quote type: ${mbox.quoteType}");

const headerTitle = document.querySelector('.tab-title');
var qt = "${mbox.quoteType}";
if (!qt || qt === "undefined" || qt === "null") {
    _satellite.logger.debug("Target: skip header update with undefined quote type");
} else if (headerTitle) {
    headerTitle.textContent = "Complete your ${mbox.quoteType} Quote and receive your perks!";
}
//</script>
