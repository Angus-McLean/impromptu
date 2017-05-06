import { RouterModule, Routes } from '@angular/router';

import { homeRoutes } from './../../main/home/home.routes';


import { LoginComponent } from './../../login/login.component';

// import { MapComponent } from './../../main/map.component';
import { NewsfeedComponent } from './../../main/newsfeed/newsfeed.component';
import { EventsComponent } from './../../main/events/events.component';
import { MessagesComponent } from './../../main/messages/messages.component';
import { NotificationsComponent } from './../../main/notifications/notifications.component';
import { SettingsComponent } from './../../main/settings/settings.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'events', component: EventsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
  ...homeRoutes
];

export const RoutingModule = RouterModule.forRoot(appRoutes);
