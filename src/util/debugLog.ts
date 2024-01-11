import { ENV_CONSTANTS } from "./env";

export const DEBUG_ENABLED = ENV_CONSTANTS.SDK_DEBUG === "true"

export function debugLog(...args: any) {
  if (!DEBUG_ENABLED) return;
  console.log(...args)
}

export function debugTable(...args: any) {
  if (!DEBUG_ENABLED) return;
  console.table(...args)
}