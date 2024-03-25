import { Result } from "./result-response.interface";

export interface ConsultInventoryResponse {
  status:  number;
  message: string;
  result:  Result;
}