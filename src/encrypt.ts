import { CompactEncrypt, importJWK, JWK } from "jose";
import { TinyEnvelope } from "./envelope.tiny";
import { TinyMatchCapsule } from "./match.tiny";

export async function encryptCapsule(
  capsule: TinyMatchCapsule,
  recipientJwk: JWK
): Promise<TinyEnvelope> {
  const key = await importJWK(recipientJwk, "RSA-OAEP-256");
  const plaintext = new TextEncoder().encode(JSON.stringify(capsule));
  const jwe = await new CompactEncrypt(plaintext)
    .setProtectedHeader({ alg: "RSA-OAEP-256", enc: "A256GCM" })
    .encrypt(key);
  return {
    e: jwe,
    r: { price: "0", payTo: "revnet" }
  };
}
