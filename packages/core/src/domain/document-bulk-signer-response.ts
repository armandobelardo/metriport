import { z } from "zod";
import { documentReferenceSchema } from "@metriport/api-sdk/medical/models/document";

export const DocumentBulkSignerLambdaResponseSchema = documentReferenceSchema.merge(
  z.object({
    url: z.string(),
  })
);

export const DocumentBulkSignerLambdaResponseArraySchema = z.array(
  DocumentBulkSignerLambdaResponseSchema
);

export type DocumentBulkSignerLambdaResponse = z.infer<
  typeof DocumentBulkSignerLambdaResponseSchema
>;
