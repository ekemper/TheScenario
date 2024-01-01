import { z } from "zod";

// TODO: Ideally there is one source of truth on the fe and be 
// that defines the schema. Find a way to use the mongoose schema 
// as the source of truth for the zod schema?? dunno yet

const Datum = z.object({
  _id: z.string(),
  data: z.string()
});

// extract the inferred type
export type Datum = z.infer<typeof Datum>;
export type Data = Datum[]