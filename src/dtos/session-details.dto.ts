import { UserType } from "../enums";
import { IUser } from "../interfaces";

export class SessionDetailsDTO {
  public user_id!: number;
  public email!: string;
  public user_type!: UserType;
  public session_expiration!: Date;

  constructor(data?: { user: IUser; expiration_date: Date }) {
    if (data) {
      this.user_id = data?.user.id;
      this.email = data?.user.email;
      this.user_type = data?.user.user_type;
      this.session_expiration = data?.expiration_date;
    }
  }
}
