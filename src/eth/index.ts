import { Address } from "../types";
import { provider, handleDecimals } from "../general";

export async function getBalance(params: {
  target: Address;
  block?: number;
  decimals?: number;
}) {
  const balance = await provider.getBalance(params.target, params.block);
  return {
    output: handleDecimals(balance, params.decimals),
  };
}

// TODO: Optimize this? (not sure if worth it tho, barely any adapters use it)
export async function getBalances(params: {
  targets: Address[];
  block?: number;
  decimals?: number;
}) {
  const balances = params.targets.map(async (target) => ({
    target,
    balance: handleDecimals(
      await provider.getBalance(target, params.block),
      params.decimals
    ),
  }));
  return {
    output: await Promise.all(balances),
  };
}

/*
eth: {
      getBalance: (options) => eth('getBalance', options),
      getBalances: (options) => eth('getBalances', options),
    },
*/