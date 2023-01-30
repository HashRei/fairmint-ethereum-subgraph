import {
  WhitelistContract,
  AddLockup,
  ApproveNewUser,
} from "./../../generated/WhitelistContract/WhitelistContract";
import { Address, BigInt } from "@graphprotocol/graph-ts";

import { User } from "../../generated/schema";

export function handleAddLockup(event: AddLockup): void {
  let user = User.load(event.params._userId.toHexString());

  let contract = WhitelistContract.bind(event.address);

  if (!user) {
    user = new User(event.params._userId.toHexString());
    user.address = Address.zero();
    user.jurisdictionId = BigInt.zero();
    user.startIndex = BigInt.zero();
    user.endIndex = BigInt.zero();
    user.totalTokensLocked = BigInt.zero();
    user.userId = Address.zero();
    user.whitelistContractAddress = Address.zero();
    user.invested = BigInt.zero();
    user.received = BigInt.zero();
    user.organizationName = "";
    user.organizationAddress = Address.zero();
  }
  user.address = event.params._userId; // Address
  user.whitelistContractAddress = event.address;

  if (contract.try_getAuthorizedUserIdInfo(event.params._userId).reverted) {
    user.startIndex = BigInt.zero();
    user.endIndex = BigInt.zero();
    user.totalTokensLocked = BigInt.zero();
  } else {
    user.totalTokensLocked = contract
      .getAuthorizedUserIdInfo(event.params._userId)
      .getTotalTokensLocked();
    user.startIndex = contract
      .getAuthorizedUserIdInfo(event.params._userId)
      .getStartIndex();
    user.endIndex = contract
      .getAuthorizedUserIdInfo(event.params._userId)
      .getEndIndex();
  }

  user.save();
}

export function handleApproveNewUser(event: ApproveNewUser): void {
  let user = User.load(event.params._trader.toHexString());

  let contract = WhitelistContract.bind(event.address);

  if (!user) {
    user = new User(event.params._trader.toHexString());
    user.address = Address.zero();
    user.jurisdictionId = BigInt.zero();
    user.startIndex = BigInt.zero();
    user.endIndex = BigInt.zero();
    user.totalTokensLocked = BigInt.zero();
    user.userId = Address.zero();
    user.whitelistContractAddress = Address.zero();
    user.invested = BigInt.zero();
    user.received = BigInt.zero();
    user.organizationName = "";
    user.organizationAddress = Address.zero();
  }
  user.address = event.params._trader; // Address
  user.jurisdictionId = event.params._jurisdictionId;
  user.whitelistContractAddress = event.address;

  if (!contract.try_authorizedWalletToUserId(event.params._trader).reverted) {
    user.userId = contract.authorizedWalletToUserId(event.params._trader);
  }

  user.save();
}
