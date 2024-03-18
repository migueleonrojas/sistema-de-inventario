import { Result } from "./result-response.interface";

export interface LoginUserResponse {
  status:  number;
  message: string;
  result:  Result;
}

