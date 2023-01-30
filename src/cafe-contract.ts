import { BigInt } from "@graphprotocol/graph-ts"
import {
  CafeContract,
  Approval,
  Burn,
  Buy,
  Close,
  Sell,
  StateChange,
  Transfer,
  UpdateConfig
} from "../generated/CafeContract/CafeContract"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DOMAIN_SEPARATOR(...)
  // - contract.PERMIT_BUY_TYPEHASH(...)
  // - contract.PERMIT_MANUAL_BUY_TYPEHASH(...)
  // - contract.PERMIT_SELL_TYPEHASH(...)
  // - contract.PERMIT_TYPEHASH(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.beneficiary(...)
  // - contract.burnedSupply(...)
  // - contract.buySlope(...)
  // - contract.control(...)
  // - contract.currency(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.equityCommitment(...)
  // - contract.feeBasisPoints(...)
  // - contract.feeCollector(...)
  // - contract.fundraisingGoal(...)
  // - contract.gasFee(...)
  // - contract.increaseAllowance(...)
  // - contract.initGoal(...)
  // - contract.initInvestors(...)
  // - contract.initReserve(...)
  // - contract.initTrial(...)
  // - contract.manualBuybackReserve(...)
  // - contract.maxGoal(...)
  // - contract.minDuration(...)
  // - contract.minInvestment(...)
  // - contract.name(...)
  // - contract.nonces(...)
  // - contract.setupFee(...)
  // - contract.setupFeeRecipient(...)
  // - contract.shareholdersPool(...)
  // - contract.stakeholdersPoolAuthorized(...)
  // - contract.stakeholdersPoolIssued(...)
  // - contract.state(...)
  // - contract.symbol(...)
  // - contract.totalInvested(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.version(...)
  // - contract.whitelist(...)
  // - contract.buySlopeNum(...)
  // - contract.buySlopeDen(...)
  // - contract.stakeholdersPool(...)
  // - contract.trialEndedOn(...)
  // - contract.buybackReserve(...)
  // - contract.estimateBuyValue(...)
  // - contract.estimateSellValue(...)
}

export function handleBurn(event: Burn): void {}

export function handleBuy(event: Buy): void {}

export function handleClose(event: Close): void {}

export function handleSell(event: Sell): void {}

export function handleStateChange(event: StateChange): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateConfig(event: UpdateConfig): void {}
