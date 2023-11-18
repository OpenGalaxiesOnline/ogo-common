import { IBaseEntity } from "./base-entity.interface";

export interface IUser extends IBaseEntity {
  email: string;
  hash: string;
  email_verified: boolean;
  user_role: string;
  banned_until?: Date;
  banned_message?: string;
  allow_newsletter: boolean;
  last_login: Date;
}
