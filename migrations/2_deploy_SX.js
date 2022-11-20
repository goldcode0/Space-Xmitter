const SXToken = artifacts.require("SXToken");

module.exports = function(deployer) {
    deployer.deploy(SXToken,
        '0xf87DCF7EA3163c9C6C9c4f811d18ad5B84F1BBC4',
        '0xb2d0803bc6c6a0d5dad33a4ab21b219dfea29e25',
        '0x88e7b14cc8aa5D244e138512B3d880f91BdEAa00',
        '0xF87641b2055dEbB7479399d2Fae406cCEE8B9ee9',
        '0x81ecB7686b08eF003EBA4824c871e5614F42e752',
        '0x732D50c13Cb50a970bc1f201dB6E84aB497B5579',
        '0x9E6458E5A698aDDF130031D63A1c8B45D7130200'
    );
};