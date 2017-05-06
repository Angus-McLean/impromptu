import { RouterModule, Routes } from '@angular/router';

// import { MapComponent } from './../../main/map.component';
import { HomeComponent } from './../../main/home/home.component';
import { EventCardComponent } from './../../shared/event-card/event-card.component';

export const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: ':eventId', component: EventCardComponent }
    ]
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
