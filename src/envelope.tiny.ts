import { z } from "zod";

export const TinyJWE = z.string();
export type TinyJWE = z.infer<typeof TinyJWE>;

export const TinyRevnet402 = z.object({
  price: z.string(),
  payTo: z.string()
});
export type TinyRevnet402 = z.infer<typeof TinyRevnet402>;

export const TinyEnvelope = z.union([
  // cleartext capsule
  z.object({ c: z.any() }),
  // encrypted capsule with Revnet payment info
  z.object({ e: TinyJWE, r: TinyRevnet402 })
]);
export type TinyEnvelope = z.infer<typeof TinyEnvelope>;
