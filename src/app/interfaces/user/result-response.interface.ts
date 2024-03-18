import { User } from "./user.interface";

export interface Result {
  mesagge: string;
  token?:  string;
  user? : User
}