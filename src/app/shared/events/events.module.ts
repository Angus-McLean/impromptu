import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdMenuModule, MdIconModule } from '@angular/material';
import { ChatModule } from './../chat/chat.module';
import { UsersModule } from './../users/users.module';
import { MinimalChatComponent } from './../chat/minimal-chat/minimal-chat.component';

// components

// declarations
import { EventCardComponent } from './event-card/event-card.component';
import { ViewGeneralComponent } from './general/view-general.component';
import { ViewAttendeesComponent } from './attendees/view-attendees.component';
import { MessagesComponent } from './messages/messages.component';


// providers
import { EventsService } from './event/events.service';
import { MinimalEventCardComponent } from './minimal-event-card/minimal-event-card.component';


export const eventRoutes: Routes = [
  { path: 'general', component: ViewGeneralComponent },
  { path: 'attendees', component: ViewAttendeesComponent },
  { path: 'messages', component: MessagesComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventRoutes),
    ChatModule, UsersModule, MdMenuModule, MdIconModule
  ],
  declarations: [
    EventCardComponent,
    ViewGeneralComponent,
    ViewAttendeesComponent,
    MessagesComponent,
    MinimalEventCardComponent
  ],
  exports: [
    MinimalEventCardComponent
  ],
  providers: [
    EventsService,
  ]
})
export class EventsModule { }
