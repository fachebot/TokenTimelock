# TokenTimelock
A token holder contract will allow a beneficiary to extract the tokens after a given release time.

## Deploy
```bash
npm install
npx hardhat run scripts/deploy.ts --network goerli
```

## Flatten
```bash
npx hardhat flatten > TokenTimelockFactory.flat.sol
```

## Deployed Addresses
* Arbitrum: [0x124E0a53190D515675fdF652bE0D827Cf6520383](https://arbiscan.io/address/0x124E0a53190D515675fdF652bE0D827Cf6520383)
* Optimistic: [0x755cb1e9b8c0ecc23aae4f4bf24d0679bd360157](https://optimistic.etherscan.io/address/0x755cb1e9b8c0ecc23aae4f4bf24d0679bd360157)