import { compactDecrypt, importJWK, JWK } from "jose";
import { TinyEnvelope } from "./envelope.tiny";
import { TinyMatchCapsule, TinyMatchCapsuleSchema } from "./match.tiny";

export async function decryptCapsule(
  envelope: TinyEnvelope,
  privJwk: JWK
): Promise<TinyMatchCapsule> {
  if (!("e" in envelope)) {
    throw new Error("Envelope is not encrypted");
  }
  const key = await importJWK(privJwk, "RSA-OAEP-256");
  const { plaintext } = await compactDecrypt(envelope.e, key);
  const capsule = JSON.parse(new TextDecoder().decode(plaintext));
  return TinyMatchCapsuleSchema.parse(capsule);
}
