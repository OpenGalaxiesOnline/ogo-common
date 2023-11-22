import { UserType } from "../enums";

export class SessionDetailsDTO {
  public user_id!: number;
  public email!: string;
  public user_type!: UserType;
  public session_expiration!: Date;

  constructor() {}
}
