import { z } from "zod";

export const TinyMatchCapsuleSchema = z.object({
  schema: z.literal("tiny.match"),
  id: z.string(),
  teams: z.tuple([z.string(), z.string()]),
  score: z.tuple([z.number(), z.number()]),
  timeline: z.array(z.string())
});

export type TinyMatchCapsule = z.infer<typeof TinyMatchCapsuleSchema>;

export const sampleCapsule: TinyMatchCapsule = {
  schema: "tiny.match",
  id: "match-1",
  teams: ["AFC", "BFC"],
  score: [1, 0],
  timeline: ["00:00 Kickoff", "45:00 Goal by AFC"]
};
