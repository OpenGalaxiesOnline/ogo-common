export interface IUser {
  id: number;
  created: Date;
  modified: Date;
  deleted: Date;
  email: string;
  hash: string;
  email_verified: boolean;
  banned_until: Date;
  banned_message: string;
  user_type: string;
}
