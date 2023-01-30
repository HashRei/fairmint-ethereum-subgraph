import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  CafeContract,
  Buy,
  Transfer,
  UpdateConfig,
} from "../../generated/CafeContract/CafeContract";
import { Organization, User } from "../../generated/schema";

export function handleBuy(event: Buy): void {
  let user = User.load(event.params._to.toHexString());

  let contract = CafeContract.bind(event.address);

  if (!user) {
    user = new User(event.params._to.toHexString());
    user.address = Address.zero();
    user.invested = BigInt.zero();
    user.received = BigInt.zero();
    user.organizationName = "";
    user.organizationAddress = Address.zero();
    user.jurisdictionId = BigInt.zero();
    user.startIndex = BigInt.zero();
    user.endIndex = BigInt.zero();
    user.totalTokensLocked = BigInt.zero();
    user.userId = Address.zero();
    user.whitelistContractAddress = Address.zero();
  }
  user.address = event.params._to;
  user.invested = user.invested.plus(event.params._currencyValue);
  user.organizationName = contract.name();
  user.organizationAddress = contract._address;
  user.save();
}

export function handleTransfer(event: Transfer): void {
  let contract = CafeContract.bind(event.address);

  let user = User.load(event.params.to.toHexString());

  if (!user) {
    user = new User(event.params.to.toHexString());
    user.address = Address.zero();
    user.invested = BigInt.zero();
    user.received = BigInt.zero();
    user.organizationName = "";
    user.organizationAddress = Address.zero();
    user.jurisdictionId = BigInt.zero();
    user.startIndex = BigInt.zero();
    user.endIndex = BigInt.zero();
    user.totalTokensLocked = BigInt.zero();
    user.userId = Address.zero();
    user.whitelistContractAddress = Address.zero();
  }
  user.address = event.params.to;
  user.received = user.received.plus(event.params.value);
  user.organizationName = contract.name();
  user.organizationAddress = contract._address;
  user.save();

  let organization = Organization.load(contract._address.toHexString());

  if (!organization) {
    organization = new Organization(contract._address.toHexString());
    organization.address = Address.zero();
    organization.stakeholdersPoolAuthorized = BigInt.zero();
    organization.minInvestment = BigInt.zero();
    organization.name = "";
    organization.initGoal = BigInt.zero();
    organization.initReserve = BigInt.zero();
    organization.equityCommitment = BigInt.zero();
    organization.fundraisingGoal = BigInt.zero();
    organization.totalSupply = BigInt.zero();
    organization.beneficiary = Address.empty();
    organization.buySlopeNum = BigInt.zero();
    organization.buySlopeDen = BigInt.zero();
    organization.stakeholdersPoolIssued = BigInt.zero();
    organization.shareholders = BigInt.zero();
    organization.whitelist = Address.empty();
    organization.control = Address.empty();
    organization.state = BigInt.zero();
    organization.symbol = "";
    organization.version = "";
    organization.decimals = BigInt.zero();
    organization.currency = Address.zero();
  }
  organization.totalSupply = contract.totalSupply();
  organization.version = contract.version();
  organization.save();
}

export function handleUpdateConfig(event: UpdateConfig): void {
  let contract = CafeContract.bind(event.address);

  let organization = Organization.load(contract._address.toHexString());

  if (!organization) {
    organization = new Organization(contract._address.toHexString());
    organization.address = Address.zero();
    organization.stakeholdersPoolAuthorized = BigInt.zero();
    organization.minInvestment = BigInt.zero();
    organization.name = "";
    organization.initGoal = BigInt.zero();
    organization.initReserve = BigInt.zero();
    organization.equityCommitment = BigInt.zero();
    organization.fundraisingGoal = BigInt.zero();
    organization.totalSupply = BigInt.zero();
    organization.beneficiary = Address.empty();
    organization.buySlopeNum = BigInt.zero();
    organization.buySlopeDen = BigInt.zero();
    organization.stakeholdersPoolIssued = BigInt.zero();
    organization.shareholders = BigInt.zero();
    organization.whitelist = Address.empty();
    organization.control = Address.empty();
    organization.state = BigInt.zero();
    organization.symbol = "";
    organization.version = "";
    organization.decimals = BigInt.zero();
    organization.currency = Address.zero();
  }
  organization.address = contract._address;
  organization.stakeholdersPoolAuthorized =
    event.params._stakeholdersPoolAuthorized;
  organization.minInvestment = event.params._minInvestment;
  organization.name = contract.name();
  organization.initGoal = contract.initGoal();
  organization.initReserve = contract.initReserve();
  organization.equityCommitment = contract.equityCommitment();
  organization.fundraisingGoal = contract.fundraisingGoal();
  organization.totalSupply = contract.totalSupply();
  organization.beneficiary = contract.beneficiary();
  organization.buySlopeNum = contract.buySlopeNum();
  organization.buySlopeDen = contract.buySlopeDen();
  organization.stakeholdersPoolIssued = contract.stakeholdersPoolIssued();
  organization.shareholders = contract.shareholdersPool();
  organization.whitelist = contract.whitelist();
  organization.control = contract.control();
  organization.state = BigInt.fromI32(contract.state());
  organization.symbol = contract.symbol();
  organization.version = contract.version();
  organization.decimals = BigInt.fromI32(contract.decimals());
  organization.currency = contract.currency();
  organization.save();
}
