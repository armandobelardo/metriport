export type SidechainFHIRConverterRequest = {
  cxId: string;
  patientId: string;
  documentId: string;
  payload: string;
  requestId?: string;
};

export interface SidechainFHIRConverterConnector {
  requestConvert(req: SidechainFHIRConverterRequest): Promise<void>;
}
