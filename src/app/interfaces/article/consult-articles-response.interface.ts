import { Result } from "./results-response.interface";

export interface ConsultArticleResponse {
  status:  number;
  message: string;
  result:  Result;
}