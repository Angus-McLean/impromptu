import { Injectable } from '@angular/core';
import { User } from './User.model';
import { MyUsers } from './users.tempdata';

@Injectable()
export class UsersService {

  public users:User[] = MyUsers;

  constructor() { }

  public getUser(userId: string) {
    return this.users.filter(ev => ev.id === userId)[0];
  }
}
