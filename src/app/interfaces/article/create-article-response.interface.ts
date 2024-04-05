import { Result } from "./result-response.interface";

export interface CreateArticleResponse {
  status:  number;
  message: string;
  result:  Result;
}