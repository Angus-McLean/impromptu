import { Injectable } from '@angular/core';
import { Message } from './Message.model';
import { MyMessages } from './Messages.tempdata';
import { User } from 'app/shared/users/User.model';
import { UsersService } from 'app/shared/users/users.service';

@Injectable()
export class MessagesService {

  public messages:Message[] = MyMessages;

  constructor(
    private userService: UsersService
  ) {
    this.messages.forEach(msg => {
        msg.sender = userService.getUser(msg.sender_id);
    });
  }

  public getMessage(messageId: string) {
    return this.messages.filter(ev => ev.id === messageId)[0];
  }

}
