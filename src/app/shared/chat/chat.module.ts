import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from 'app/shared/users/users.module';
import { UsersService } from 'app/shared/users/users.service';

import { MessagesService } from './message/messages.service';
import { MinimalChatComponent } from './minimal-chat/minimal-chat.component';
import { FullChatComponent } from './full-chat/full-chat.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { ReceivedMessageComponent } from './received-message/received-message.component';

@NgModule({
  imports: [
    CommonModule, UsersModule
  ],
  providers: [
    MessagesService,
    UsersModule
  ],
  exports: [MinimalChatComponent, FullChatComponent, SentMessageComponent, ReceivedMessageComponent],
  declarations: [
    MinimalChatComponent,
    FullChatComponent,
    SentMessageComponent,
    ReceivedMessageComponent
  ]
})
export class ChatModule { }
