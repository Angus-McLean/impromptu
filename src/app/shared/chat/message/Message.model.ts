import { User } from 'app/shared/users/User.model';

export class Message {

  public id: string;
  public sender_id: string;
  public sender: User;
  public destination_id: string;
  public content: string;

  constructor() {}
}
