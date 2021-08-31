# ![AlgoSigner](media/algosigner-wallet-banner-3.png)

An open-source, security audited, Algorand wallet browser extension that lets users approve and sign transactions that are generated by Algorand dApp applications — available for Chrome.

## Chrome Extension Store

The extension is available on the [Chrome Extension Store](https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm)

_This is the preferred solution for end-users, updates will be automatically installed after review by the extension store_

Developers working with dApps may also install directly from the release package, or by downloading the project and building it.

## 1.6.0 Release

### Functionality
Added ability to use a Ledger device to add public addresses into AlgoSigner and for signing pay and asset transactions. For information about it how to use you can refer to the new readme.

- [Ledger Readme](docs/ledger.md)

### Various Fixes
- UI general improvements 
- Improved validation handling in v2 signing 
- Modified asset verification to use algod 
- Fixed issue with 404's from asset lookups
- Modify transactions without an amount to default to 0
- Fixed issue with creating assets that have zero decimals 

### 1.6.1 Patch
- `BigInt` support for `amount` and `assetTotal`
- Algorand JS SDK `v1.9.1` support
- Various improvements regarding Transaction fields validations and Signing UI clarity

### 1.6.2 Patch
- Algorand JS SDK `v1.11.1` support
  - Includes support for `extraPages` field on `Appl` txs
- Fix display for `Total` amount for `Pay` txs
- Network Config fix for local Sandbox nodes
- More descriptive `Appl` and `Axfer` txs on the Transactions list

## New Users

- Watch [Getting Started with AlgoSigner](https://youtu.be/tG-xzG8r770)

## Adding Custom Networks

AlgoSigner users may add their own networks to the extension, for example BetaNet or the sandbox private network - [Instructions](docs/add-network.md)

## dApp Developers

For teams looking to integrate AlgoSigner into a project:

Developing with v2 Transaction Signing

- [dApp development guide](docs/dApp-guide.md)
- [v2 AlgoSigner methods](docs/dApp-integration.md)

Legacy v1 Transaction Signing

- [v1 Guide](docs/legacy-signing.md)
- [v1 AlgoSigner methods](docs/legacy-dApp-integration.md)

## Roadmap

- v1 to v2 migration guide
- Ledger support
- UI improvements
- Contribution guidelines

### AlgoSigner development

For developers interested in working with AlgoSigner [Extension Guide](docs/extension-developers.md). A contribution guide is in development.

## License

This project is under the MIT License
