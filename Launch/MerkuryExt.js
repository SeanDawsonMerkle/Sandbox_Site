function identityCallback(identity) {
    _satellite.logger.debug('Merkury identityCallback');
    window.MerkuryIdentity = identity;
}