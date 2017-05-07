import { RouterModule, Routes } from '@angular/router';

// import { MapComponent } from './../../main/map.component';
import { HomeComponent } from './../../main/home/home.component';
import { EventCardComponent } from './../../shared/events/event-card/event-card.component';
import { eventRoutes } from './../../shared/events/events.module';

export const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: ':eventId', component: EventCardComponent },
      { path: ':eventId', component: EventCardComponent, children: eventRoutes }
    ]
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
