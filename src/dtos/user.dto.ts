import { UserType } from "../enums";
import { IUser } from "../interfaces";

export class UserDTO {
  public user_id!: number;
  public created!: Date;
  public modified!: Date;
  public email!: string;
  public user_type!: UserType;
  public email_verified!: boolean;
  public banned_until?: Date;
  public banned_message?: string;
  public allow_newsletter!: boolean;
  public last_login?: Date;

  constructor(data?: IUser) {
    if (data) {
      this.user_id = data?.id;
      this.created = data?.created;
      this.modified = data?.modified;
      this.email = data?.email;
      this.user_type = data?.user_type;
      this.email_verified = data?.email_verified;
      this.banned_until = data?.banned_until;
      this.banned_message = data?.banned_message;
      this.allow_newsletter = data?.allow_newsletter;
      this.last_login = data?.last_login;
    }
  }
}
