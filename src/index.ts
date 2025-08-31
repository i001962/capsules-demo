import { sampleCapsule } from "./match.tiny";
import { encryptCapsule } from "./encrypt";
import { generateKeyPair, exportJWK } from "jose";

async function main() {
  const { publicKey } = await generateKeyPair("RSA-OAEP");
  const pubJwk = await exportJWK(publicKey);
  const env = await encryptCapsule(sampleCapsule, pubJwk);
  console.log("Encrypted envelope:", env);
}

main();
