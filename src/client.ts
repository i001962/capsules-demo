import { WalletClient, erc20Abi } from "viem";
import { TinyEnvelope } from "./envelope.tiny";

// Stub for unlocking a Revnet capsule using a wallet
export async function unlockRevnetCapsule(
  wallet: WalletClient,
  env: TinyEnvelope
) {
  if (!("r" in env)) return;
  // Approve USDC to terminal
  // await wallet.writeContract({ address: "USDC", abi: erc20Abi, functionName: "approve", args: ["TERMINAL", BigInt(env.r.price)] });
  // Call pay on Multiterminal
  // await wallet.writeContract({ address: "MULTITERMINAL", abi: [], functionName: "pay", args: [env.r.payTo] });
}
