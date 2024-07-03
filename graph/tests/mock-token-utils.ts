import { newMockEvent } from "matchstick-as";
import {
  ethereum,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";
import {
  Approval,
  Transfer,
} from "../generated/MockToken/MockToken";

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: bigint,
): Approval {
  const approvalEvent = changetype<Approval>(
    newMockEvent(),
  );

  approvalEvent.parameters = [];

  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "owner",
      ethereum.Value.fromAddress(owner),
    ),
  );
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "spender",
      ethereum.Value.fromAddress(spender),
    ),
  );
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "value",
      ethereum.Value.fromUnsignedBigInt(value),
    ),
  );

  return approvalEvent;
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: bigint,
): Transfer {
  const transferEvent = changetype<Transfer>(
    newMockEvent(),
  );

  transferEvent.parameters = [];

  transferEvent.parameters.push(
    new ethereum.EventParam(
      "from",
      ethereum.Value.fromAddress(from),
    ),
  );
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "to",
      ethereum.Value.fromAddress(to),
    ),
  );
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "value",
      ethereum.Value.fromUnsignedBigInt(value),
    ),
  );

  return transferEvent;
}
