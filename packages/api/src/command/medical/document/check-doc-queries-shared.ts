import { Progress } from "../../../domain/medical/document-query";

export type MainProgressProps = keyof Pick<Progress, "total" | "status">;

export type SingleValidationResult = MainProgressProps | "both" | undefined;
export type GroupedValidationResult = {
  cxId: string; // needed downstream
  convert?: SingleValidationResult;
  download?: SingleValidationResult;
};
export type PatientsWithValidationResult = Record<string, GroupedValidationResult>;
