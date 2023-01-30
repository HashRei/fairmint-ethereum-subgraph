
# Fairmint Ethereum Subgraph

## Description
The Fairmint Ethereum subgraph index data from the CAFE and the whitelist contracts deployed by Fairmint on Ethereum.

## Deployed subgraphs

All subgraphs are deployed on the decentralized network:

### Production network
- [ETH Mainnet]()

### Test network

- [Goerli]()

## Usage

The subgraph can be queried directly from the graph explorer, or from [another application](https://thegraph.com/docs/en/developer/querying-from-your-app/).


### Example querie

Get all the information about an organization with its id identifier.

```graphql
{
  organizations(where: {id: "<ORGANIZATION-ID"}) {
    id
    address
    name
    symbol
    initGoal
    initReserve
    equityCommitment
    fundraisingGoal
    totalSupply
    beneficiary
    buySlopeNum
    buySlopeDen
    stakeholdersPoolIssued
    stakeholdersPoolAuthorized
    shareholders
    minInvestment
    whitelist
    control
    state
    version
    decimals
    currency
 }
}
```

Get all the information about a user with its id identifier.

```graphql
{
  users(where: {id: "<USER-ID"}) {
    id
    address
    invested
    received
    totalTokensLocked
    startIndex
    endIndex
    jurisdictionId
    organizationName
    organizationAddress
    whitelistContractAddress
  }
}
```

## Quickstart

### Installation
- Install Graph CLI
```shell
yarn global add @graphprotocol/graph-cli
```

### Update
Update **package.json** with the slug of your subgraph on Subgraph Studio.

### Deployment
- Code generation for the subgraph
```shell
yarn codegen
```
- Build the subgraph and check compilation errors
```shell
yarn build
```
- Authentification
```shell
graph auth --studio '<ACCESS_TOKEN>'
```
- Deployment
```shell
yarn  deploy 
```


### Troubleshooting

If there is an error while indexing the subgraph, it may not be displayed in the Explorer logs.

You can query the health of your subgraph as shown [here](https://github.com/graphprotocol/graph-node/issues/3709#issuecomment-1175039622).
