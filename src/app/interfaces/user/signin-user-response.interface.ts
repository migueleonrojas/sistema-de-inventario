import { Result } from "./result-response.interface";

export interface SigninUserResponse {
  status:  number;
  message: string;
  result:  Result;
}