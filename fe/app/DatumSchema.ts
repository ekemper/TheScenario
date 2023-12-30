import { z } from "zod";

const Datum = z.object({
  id: z.string(),
  data: z.string()
});

// User.parse({ username: "Ludwig" });

// extract the inferred type
export type Datum = z.infer<typeof Datum>;
// { username: string }