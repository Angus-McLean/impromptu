import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { RoutingModule } from './shared/routes/app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './main/home/home.component';
import { NewsfeedComponent } from './main/newsfeed/newsfeed.component';
import { EventsComponent } from './main/events/events.component';
import { MessagesComponent } from './main/messages/messages.component';
import { NotificationsComponent } from './main/notifications/notifications.component';
import { SettingsComponent } from './main/settings/settings.component';
// import { MaterialModule } from '@angular/material';
// import { MdToolbarModule, MdSidenavModule } from '@angular/material';
import { GoogleMapsService } from './main/home/googlemaps.service';
import { SidebarService } from './shared/sidebar/sidebar.service';
import { EventsService } from './shared/event/events.service';
import { EventCardComponent } from './shared/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    NewsfeedComponent,
    EventsComponent,
    MessagesComponent,
    NotificationsComponent,
    SettingsComponent,
    EventCardComponent
  ],
  imports: [

	BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule,
	// MaterialModule.forRoot(),
	RoutingModule
  ],
  providers: [
    GoogleMapsService, SidebarService, EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
