import { Patient } from "@medplum/fhirtypes";
import { NPIStringArray, oidStringSchema, SamlAttributes } from "./shared";
import { z } from "zod";

export const xcpdGatewaysSchema = z.array(
  z.object({
    oid: oidStringSchema,
    url: z.string(),
    id: z.string(),
  })
);

export type XCPDGateways = z.infer<typeof xcpdGatewaysSchema>;

export type PatientDiscoveryRequest = {
  id: string;
  cxId: string;
  timestamp: string;
  xcpdGateways: XCPDGateways;
  samlAttributes: SamlAttributes;
  patientResource: Patient;
  principalCareProviderIds?: NPIStringArray;
};
