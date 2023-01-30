import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Burn,
  Buy,
  Close,
  Sell,
  StateChange,
  Transfer,
  UpdateConfig
} from "../generated/CafeContract/CafeContract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBurnEvent(_from: Address, _fairValue: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "_fairValue",
      ethereum.Value.fromUnsignedBigInt(_fairValue)
    )
  )

  return burnEvent
}

export function createBuyEvent(
  _from: Address,
  _to: Address,
  _currencyValue: BigInt,
  _fairValue: BigInt
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyValue",
      ethereum.Value.fromUnsignedBigInt(_currencyValue)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "_fairValue",
      ethereum.Value.fromUnsignedBigInt(_fairValue)
    )
  )

  return buyEvent
}

export function createCloseEvent(): Close {
  let closeEvent = changetype<Close>(newMockEvent())

  closeEvent.parameters = new Array()

  return closeEvent
}

export function createSellEvent(
  _from: Address,
  _to: Address,
  _currencyValue: BigInt,
  _fairValue: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyValue",
      ethereum.Value.fromUnsignedBigInt(_currencyValue)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "_fairValue",
      ethereum.Value.fromUnsignedBigInt(_fairValue)
    )
  )

  return sellEvent
}

export function createStateChangeEvent(
  _previousState: BigInt,
  _newState: BigInt
): StateChange {
  let stateChangeEvent = changetype<StateChange>(newMockEvent())

  stateChangeEvent.parameters = new Array()

  stateChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_previousState",
      ethereum.Value.fromUnsignedBigInt(_previousState)
    )
  )
  stateChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_newState",
      ethereum.Value.fromUnsignedBigInt(_newState)
    )
  )

  return stateChangeEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUpdateConfigEvent(
  _whitelistAddress: Address,
  _beneficiary: Address,
  _control: Address,
  _feeCollector: Address,
  _feeBasisPoints: BigInt,
  _minInvestment: BigInt,
  _minDuration: BigInt,
  _stakeholdersPoolAuthorized: BigInt,
  _gasFee: BigInt
): UpdateConfig {
  let updateConfigEvent = changetype<UpdateConfig>(newMockEvent())

  updateConfigEvent.parameters = new Array()

  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_whitelistAddress",
      ethereum.Value.fromAddress(_whitelistAddress)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam("_control", ethereum.Value.fromAddress(_control))
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_feeCollector",
      ethereum.Value.fromAddress(_feeCollector)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_feeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(_feeBasisPoints)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_minInvestment",
      ethereum.Value.fromUnsignedBigInt(_minInvestment)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_minDuration",
      ethereum.Value.fromUnsignedBigInt(_minDuration)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_stakeholdersPoolAuthorized",
      ethereum.Value.fromUnsignedBigInt(_stakeholdersPoolAuthorized)
    )
  )
  updateConfigEvent.parameters.push(
    new ethereum.EventParam(
      "_gasFee",
      ethereum.Value.fromUnsignedBigInt(_gasFee)
    )
  )

  return updateConfigEvent
}
